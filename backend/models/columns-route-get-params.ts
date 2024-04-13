import { z } from 'zod';

export const columnsRouteGetParamsSchema = z.object({
	tableName: z.string().min(1),
});

export type ColumnsRouteGetParams = z.infer<typeof columnsRouteGetParamsSchema>;
