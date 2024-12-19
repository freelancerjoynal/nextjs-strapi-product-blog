import { cookies } from 'next/headers';
const cookieStore = await cookies();
const Token = cookieStore.get('token')?.value;

export default Token;