import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/MyNFTMarketV4/MyNFTMarketV4"

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createFeeReceiverUpdatedEvent(
  newFeeReceiver: Address,
  timestamp: BigInt
): FeeReceiverUpdated {
  let feeReceiverUpdatedEvent = changetype<FeeReceiverUpdated>(newMockEvent())

  feeReceiverUpdatedEvent.parameters = new Array()

  feeReceiverUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeeReceiver",
      ethereum.Value.fromAddress(newFeeReceiver)
    )
  )
  feeReceiverUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return feeReceiverUpdatedEvent
}

export function createListingCancelledEvent(
  listingId: BigInt,
  nftContract: Address,
  tokenId: BigInt,
  tokenType: i32,
  seller: Address,
  timestamp: BigInt
): ListingCancelled {
  let listingCancelledEvent = changetype<ListingCancelled>(newMockEvent())

  listingCancelledEvent.parameters = new Array()

  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return listingCancelledEvent
}

export function createListingCreatedEvent(
  listingId: BigInt,
  nftContract: Address,
  tokenId: BigInt,
  tokenType: i32,
  seller: Address,
  paymentToken: Address,
  price: BigInt,
  amount: BigInt,
  requiresWhitelist: boolean,
  timestamp: BigInt
): ListingCreated {
  let listingCreatedEvent = changetype<ListingCreated>(newMockEvent())

  listingCreatedEvent.parameters = new Array()

  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromAddress(paymentToken)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "requiresWhitelist",
      ethereum.Value.fromBoolean(requiresWhitelist)
    )
  )
  listingCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return listingCreatedEvent
}

export function createMerkleRootUpdatedEvent(
  newRoot: Bytes,
  timestamp: BigInt
): MerkleRootUpdated {
  let merkleRootUpdatedEvent = changetype<MerkleRootUpdated>(newMockEvent())

  merkleRootUpdatedEvent.parameters = new Array()

  merkleRootUpdatedEvent.parameters.push(
    new ethereum.EventParam("newRoot", ethereum.Value.fromFixedBytes(newRoot))
  )
  merkleRootUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return merkleRootUpdatedEvent
}

export function createNFTClaimedEvent(
  listingId: BigInt,
  user: Address,
  discountedPrice: BigInt,
  timestamp: BigInt
): NFTClaimed {
  let nftClaimedEvent = changetype<NFTClaimed>(newMockEvent())

  nftClaimedEvent.parameters = new Array()

  nftClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  nftClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  nftClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "discountedPrice",
      ethereum.Value.fromUnsignedBigInt(discountedPrice)
    )
  )
  nftClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return nftClaimedEvent
}

export function createNFTPurchasedEvent(
  listingId: BigInt,
  nftContract: Address,
  tokenId: BigInt,
  tokenType: i32,
  seller: Address,
  buyer: Address,
  price: BigInt,
  amount: BigInt,
  platformFee: BigInt,
  isPermitBuy: boolean,
  timestamp: BigInt
): NFTPurchased {
  let nftPurchasedEvent = changetype<NFTPurchased>(newMockEvent())

  nftPurchasedEvent.parameters = new Array()

  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "listingId",
      ethereum.Value.fromUnsignedBigInt(listingId)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "nftContract",
      ethereum.Value.fromAddress(nftContract)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenType))
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "platformFee",
      ethereum.Value.fromUnsignedBigInt(platformFee)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "isPermitBuy",
      ethereum.Value.fromBoolean(isPermitBuy)
    )
  )
  nftPurchasedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return nftPurchasedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPermitPrePaidEvent(
  user: Address,
  token: Address,
  amount: BigInt,
  timestamp: BigInt
): PermitPrePaid {
  let permitPrePaidEvent = changetype<PermitPrePaid>(newMockEvent())

  permitPrePaidEvent.parameters = new Array()

  permitPrePaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  permitPrePaidEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  permitPrePaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  permitPrePaidEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return permitPrePaidEvent
}

export function createPlatformFeeUpdatedEvent(
  newFeePercentage: BigInt,
  timestamp: BigInt
): PlatformFeeUpdated {
  let platformFeeUpdatedEvent = changetype<PlatformFeeUpdated>(newMockEvent())

  platformFeeUpdatedEvent.parameters = new Array()

  platformFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newFeePercentage",
      ethereum.Value.fromUnsignedBigInt(newFeePercentage)
    )
  )
  platformFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return platformFeeUpdatedEvent
}

export function createSignerUpdatedEvent(
  newSigner: Address,
  timestamp: BigInt
): SignerUpdated {
  let signerUpdatedEvent = changetype<SignerUpdated>(newMockEvent())

  signerUpdatedEvent.parameters = new Array()

  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )
  signerUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return signerUpdatedEvent
}

export function createWhitelistDiscountUpdatedEvent(
  newDiscount: BigInt,
  timestamp: BigInt
): WhitelistDiscountUpdated {
  let whitelistDiscountUpdatedEvent =
    changetype<WhitelistDiscountUpdated>(newMockEvent())

  whitelistDiscountUpdatedEvent.parameters = new Array()

  whitelistDiscountUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newDiscount",
      ethereum.Value.fromUnsignedBigInt(newDiscount)
    )
  )
  whitelistDiscountUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "timestamp",
      ethereum.Value.fromUnsignedBigInt(timestamp)
    )
  )

  return whitelistDiscountUpdatedEvent
}
