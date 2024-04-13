import z from 'zod';

export const dbConnectionConfig = z.object({
	host: z.string().ip(),
	user: z.string().min(1),
	port: z.number().positive(),
	database: z.string().min(1),
	password: z.string(),
});

export type DbConnectionConfig = z.infer<typeof dbConnectionConfig>;
