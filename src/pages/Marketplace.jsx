import Cards from "../components/cards";
import "./pages.css"

import nfts from '../data/nft-list/nftList'

export default function Marketplace() {
  return (
    <div className="marketplaceContainer">
      {nfts.map(nft => (
        <Cards key={nft.id} nftName={nft.nftName} highestBid={nft.highestBid} image={nft.image} />
      ))}
    </div>
  );
}