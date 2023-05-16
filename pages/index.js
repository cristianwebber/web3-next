import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Lottery from '@/components/Lottery';
import { useMoralis } from "react-moralis";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div>
      <Header/>
      <Lottery/>
    </div>
  )
}
