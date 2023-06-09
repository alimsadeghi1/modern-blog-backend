import { Injectable } from '@nestjs/common';
import { authenticator } from 'otplib';

@Injectable()
export class OtpService {
  generate(secret: string) {
    authenticator.options = {
      step: 120,
    };
    return authenticator.generate(secret);
  }

  verify(secret: string, token: string) {
    return authenticator.verify({ secret, token });
  }
}
