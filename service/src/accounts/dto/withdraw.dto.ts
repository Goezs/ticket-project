import { ApiSchema } from '@nestjs/swagger';
import { TransactionAmountDto } from './transaction-amount.dto.js';

@ApiSchema({ name: 'WithdrawDto', description: 'Estructura para realizar un retiro de fondos de la cuenta' })
export class WithdrawDto extends TransactionAmountDto {}