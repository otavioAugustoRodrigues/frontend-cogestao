import { z } from 'zod';

export const validador = z.object({
  nome: z
    .string({ required_error: 'Insira um título do evento' })
    .min(1, { message: 'Preencha o campo!' })
    .max(25, { message: 'Limite máximo de carácteres alcançado!' }),
  decricao: z
    .string({ required_error: 'Insira uma descrição!' })
    .min(8, { message: 'Descrição precisa ter no mínimo 8 carácteres!' })
    .max(50, { message: 'Limite máximo de carácteres alcançado!' }),
  URLimagem: z
    .string({ required_error: 'A categoria é obrigatorio' })
    .min(1, { message: 'Preencha o campo de categoria!' }),
  tipo: z.string({ required_error: 'A categoria é obrigatório' }),
});
