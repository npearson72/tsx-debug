import express from 'express';
import cors from 'cors';

export * from './globalErrorHandler';

export default [
  express.json({
    type: ['application/json', 'application/vnd.api+json']
  }),
  cors()
];
