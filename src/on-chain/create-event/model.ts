import * as borsh from 'borsh';

export const EVENT_ACCOUNT_SPACE = 134;
export const CREATE_EVENT_DISCRIMINATOR = Uint8Array.from([0]);

export class CreateEventInstruction {
  price: number;
  tickets_total: number;
  event_name: Uint8Array;
  event_address: Uint8Array;

  event_name_length: number = 48;
  event_address_length: number = 48;

  constructor(fields: {
    price: number;
    tickets_total: number;
    event_name: string;
    event_address: string;
  }) {
    this.price = fields.price;
    this.tickets_total = fields.tickets_total;
    this.event_name = encodeFixedString(
      fields.event_name,
      this.event_name_length
    );
    this.event_address = encodeFixedString(
      fields.event_address,
      this.event_address_length
    );
  }
}

export const CreateEventBorshSchema: borsh.Schema = {
  struct: {
    price: 'u16',
    tickets_total: 'u16',
    event_name: { array: { type: 'u8', len: 48 } },
    event_address: { array: { type: 'u8', len: 48 } },
  },
};

function encodeFixedString(str: string, length: number): Uint8Array {
  const buf = Buffer.alloc(length);
  buf.write(str, 0, 'utf8');
  return Uint8Array.from(buf);
}
