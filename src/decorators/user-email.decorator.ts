import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UserEmail = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const { user } = ctx.switchToHttp().getRequest();
        return user;
    },
);
