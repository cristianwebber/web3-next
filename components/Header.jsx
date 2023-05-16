import { ConnectButton } from "web3uikit";

export default function Header() {

    return (
        <div>
            <nav className="p-5 border-b-2 flex">
                <h1 className="py-4 px-6 font-bold text-6xl">Lottery</h1>
                <div className="ml-auto py-4 px-6">
                    <ConnectButton moralisAuth={false} />
                </div>
            </nav>
        </div>
    )

}
