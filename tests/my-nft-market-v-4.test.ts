import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { EIP712DomainChanged } from "../generated/schema"
import { EIP712DomainChanged as EIP712DomainChangedEvent } from "../generated/MyNFTMarketV4/MyNFTMarketV4"
import { handleEIP712DomainChanged } from "../src/my-nft-market-v-4"
import { createEIP712DomainChangedEvent } from "./my-nft-market-v-4-utils"

import { handleListingCreated } from "../src/my-nft-market-v-4"
import { createListingCreatedEvent } from "./my-nft-market-v-4-utils"
import { ListingCreated } from "../generated/schema"

describe("ListingCreated tests", () => {
  beforeAll(() => {
    // 创建模拟事件
    let listingCreatedEvent = createListingCreatedEvent(
      BigInt.fromI32(1), // listingId
      Address.fromString("0x1234567890123456789012345678901234567890"), // nftContract
      BigInt.fromI32(100), // tokenId
      1, // tokenType (ERC721)
      Address.fromString("0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"), // seller
      Address.fromString("0x0000000000000000000000000000000000000000"), // paymentToken (ETH)
      BigInt.fromString("1000000000000000000"), // price (1 ETH)
      BigInt.fromI32(1), // amount
      false, // requiresWhitelist
      BigInt.fromI32(1640995200) // timestamp
    )
    
    // 调用处理函数
    handleListingCreated(listingCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  test("ListingCreated entity is created and stored correctly", () => {
    // 验证实体数量
    assert.entityCount("ListingCreated", 1)
    
    // 验证实体字段
    let entityId = "0x01" // listingId=1 转换为偶数长度十六进制
    assert.fieldEquals("ListingCreated", entityId, "listingId", "1")
    assert.fieldEquals("ListingCreated", entityId, "tokenId", "100")
    assert.fieldEquals("ListingCreated", entityId, "tokenType", "1")
    assert.fieldEquals("ListingCreated", entityId, "requiresWhitelist", "false")
  })

  test("Test with different listingId values", () => {
    clearStore()
    
    // 测试 listingId = 15 (奇数长度十六进制)
    let event15 = createListingCreatedEvent(
      BigInt.fromI32(15), // 十六进制为 "f"
      Address.fromString("0x1234567890123456789012345678901234567890"),
      BigInt.fromI32(200),
      1,
      Address.fromString("0xabcdefabcdefabcdefabcdefabcdefabcdefabcd"),
      Address.fromString("0x0000000000000000000000000000000000000000"),
      BigInt.fromString("2000000000000000000"),
      BigInt.fromI32(1),
      true,
      BigInt.fromI32(1640995300)
    )
    
    handleListingCreated(event15)
    
    // 验证 ID 被正确处理为偶数长度
    let entityId = "0x0f" // "f" 被补零为 "0f"
    assert.entityCount("ListingCreated", 1)
    assert.fieldEquals("ListingCreated", entityId, "listingId", "15")
  })
})
