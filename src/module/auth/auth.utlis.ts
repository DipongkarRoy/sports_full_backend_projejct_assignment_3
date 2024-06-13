import bcrypt from 'bcryptjs';

export const ispasswordMacthed = async (
  plainPassword: string,
  hashedpassword: string,
): Promise<boolean> => {
  const isMacted = await bcrypt.compare(plainPassword, hashedpassword);
  return isMacted;
};
