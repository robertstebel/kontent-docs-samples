// DocSection: cm_api_v2_get_webhook
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kontent-ai/management-sdk';

const client = new ManagementClient({
  projectId: '<YOUR_PROJECT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

const response = await client.getWebhook()
  .byId("5df74e27-1213-484e-b9ae-bcbe90bd5990")
  .toPromise();
// EndDocSection
