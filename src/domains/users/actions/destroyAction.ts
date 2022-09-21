import db from '@utils/db';
import { successResult, failureResult } from '@utils/serviceResults';

const destroyAction = async ({ id }: { id: string }) => {
  try {
    await db.user.delete({
      where: { id: Number(id) }
    });

    return successResult({});
  } catch (e: any) {
    if (e.code && e.code === 'P2025') {
      return failureResult({ type: 'RecordNotFound' });
    }

    throw e;
  }
};

export { destroyAction };
