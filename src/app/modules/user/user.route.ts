import express from 'express';
import { userControllers } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { userValidations } from './user.validation';

const router = express.Router();

router.get('/', userControllers.getAllUsers);

router.post(
  '/',
  validateRequest(userValidations.userCreateValidationSchema),
  userControllers.createUser
);

router.get('/:userId', userControllers.getSingleUser);

router.put(
  '/:userId',
  // validateRequest(userValidations.userUpdateValidationSchema),
  userControllers.softDeleteSingleUser
);

export const userRoutes = router;
