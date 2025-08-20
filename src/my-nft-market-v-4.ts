import { Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  EIP712DomainChanged as EIP712DomainChangedEvent,
  FeeReceiverUpdated as FeeReceiverUpdatedEvent,
  ListingCancelled as ListingCancelledEvent,
  ListingCreated as ListingCreatedEvent,
  MerkleRootUpdated as MerkleRootUpdatedEvent,
  NFTClaimed as NFTClaimedEvent,
  NFTPurchased as NFTPurchasedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PermitPrePaid as PermitPrePaidEvent,
  PlatformFeeUpdated as PlatformFeeUpdatedEvent,
  SignerUpdated as SignerUpdatedEvent,
  WhitelistDiscountUpdated as WhitelistDiscountUpdatedEvent
} from "../generated/MyNFTMarketV4/MyNFTMarketV4"
import {
  EIP712DomainChanged,
  FeeReceiverUpdated,
  ListingCancelled,
  ListingCreated,
  MerkleRootUpdated,
  NFTClaimed,
  NFTPurchased,
  OwnershipTransferred,
  PermitPrePaid,
  PlatformFeeUpdated,
  SignerUpdated,
  WhitelistDiscountUpdated
} from "../generated/schema"

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeReceiverUpdated(event: FeeReceiverUpdatedEvent): void {
  let entity = new FeeReceiverUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFeeReceiver = event.params.newFeeReceiver
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let entity = new ListingCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listingId = event.params.listingId
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.tokenType = event.params.tokenType
  entity.seller = event.params.seller
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  let listing = ListingCreated.load(bigIntTo8Bytes(event.params.listingId))
  if (listing) {
    listing.cancelTxHash = event.transaction.hash
    listing.save()
  }
}

export function handleListingCreated(event: ListingCreatedEvent): void {
  let entity = new ListingCreated(
    bigIntTo8Bytes(event.params.listingId)
  )
  entity.listingId = event.params.listingId
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.tokenType = event.params.tokenType
  entity.seller = event.params.seller
  entity.paymentToken = event.params.paymentToken
  entity.price = event.params.price
  entity.amount = event.params.amount
  entity.requiresWhitelist = event.params.requiresWhitelist
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// Utility function to convert BigInt to 8-byte Bytes
function bigIntTo8Bytes(value: BigInt): Bytes {
  let valueBytes = Bytes.fromBigInt(value)
  // Ensure exactly 8 bytes by padding with zeros if necessary
  let paddedBytes = new Uint8Array(8)
  let sourceBytes = valueBytes.reverse() // Little endian to big endian
  for (let i = 0; i < sourceBytes.length && i < 8; i++) {
    paddedBytes[8 - sourceBytes.length + i] = sourceBytes[i]
  }
  return Bytes.fromUint8Array(paddedBytes)
}

export function handleMerkleRootUpdated(event: MerkleRootUpdatedEvent): void {
  let entity = new MerkleRootUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newRoot = event.params.newRoot
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTClaimed(event: NFTClaimedEvent): void {
  let entity = new NFTClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listingId = event.params.listingId
  entity.user = event.params.user
  entity.discountedPrice = event.params.discountedPrice
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNFTPurchased(event: NFTPurchasedEvent): void {
  let entity = new NFTPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.listingId = event.params.listingId
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.tokenType = event.params.tokenType
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.price = event.params.price
  entity.amount = event.params.amount
  entity.platformFee = event.params.platformFee
  entity.isPermitBuy = event.params.isPermitBuy
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePermitPrePaid(event: PermitPrePaidEvent): void {
  let entity = new PermitPrePaid(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePlatformFeeUpdated(event: PlatformFeeUpdatedEvent): void {
  let entity = new PlatformFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newFeePercentage = event.params.newFeePercentage
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignerUpdated(event: SignerUpdatedEvent): void {
  let entity = new SignerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newSigner = event.params.newSigner
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWhitelistDiscountUpdated(
  event: WhitelistDiscountUpdatedEvent
): void {
  let entity = new WhitelistDiscountUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newDiscount = event.params.newDiscount
  entity.timestamp = event.params.timestamp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
