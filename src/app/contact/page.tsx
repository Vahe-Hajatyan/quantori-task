'use client';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
const contact = () => {
  useAuth();
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { push } = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      push('/login');
    }
  }, [isAuthenticated]);
  return <p className='text-2xl text-primary text-center mt-6'>Welcome To Contact Page</p>;

};
export default contact;
