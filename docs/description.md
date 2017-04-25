Entering Purchases:
Enter Date of purchase
Search StoreChain (chain)
  If StoreChain exists -> Search Store (city, state, zip)
    If Store exists -> Search ItemName (name)
      If ItemName exists -> Search Items with ItemName from Store
        If Item exists -> fetch last Purchase of that item and populate servingsPerUnit, servingMetric, costPerUnit
          If edit servingMetric or servingsPerUnit -> create new Item
          If edit price or all correct info -> enter # of units, create new Purchase
        If not -> create new Item
      If not -> create new ItemName
    If not -> create new Store
  If not -> create new StoreChain


Date of purchase: (persist until change. Init by fetching most recent Purchase entry's createdAt date)
StoreName: Search by name
Store (location): Display city, state, and zip (expand to full address at some point?)
Items: []
  - Should be a display of editable rows in order from most recent to least recent.
  - Database should be updated on 'Enter' or 'Submit' button -> auto create new row
  - Limit to 10 per page
  - Create pages dynamically
  -
