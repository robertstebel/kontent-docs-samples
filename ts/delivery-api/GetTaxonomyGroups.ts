// DocSection: delivery_api_get_taxonomy_groups
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
import { createDeliveryClient } from '@kentico/kontent-delivery';

const deliveryClient = createDeliveryClient({
  projectId: '<YOUR_PROJECT_ID>'
});

const response = await deliveryClient.taxonomies()
    .limitParameter(3)
    .toPromise();
// EndDocSection