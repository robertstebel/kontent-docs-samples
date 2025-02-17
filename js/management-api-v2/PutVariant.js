// DocSection: cm_api_v2_put_variant
// Tip: Find more about JS/TS SDKs at https://kontent.ai/learn/javascript
// Using ES6 syntax
import { ManagementClient } from '@kontent-ai/management-sdk';

const client = new ManagementClient({
  projectId: '<YOUR_PROJECT_ID>',
  apiKey: '<YOUR_API_KEY>'
});

const response = await client.upsertLanguageVariant()
  .byItemId('f4b3fc05-e988-4dae-9ac1-a94aba566474')
  // .byItemCodename('my_article')
  // .byItemExternalId('59713')
  .byLanguageId('d1f95fde-af02-b3b5-bd9e-f232311ccab8')
  // .byLanguageCodename('es-ES')
  .withData((builder) => {
    return {
      elements: [
        builder.taxonomyElement({
          element: {
            codename: 'personas'
          },
          value: [
            {
              codename: 'barista'
            },
            {
              codename: 'coffee_blogger'
            }
          ]
        }),
        builder.dateTimeElement({
          element: {
            codename: 'post_date'
          },
          value: '2014-11-07T00:00:00Z',
          display_timezone: "Australia/Sydney"
        }),
        builder.textElement({
          element: {
            codename: 'summary'
          },
          value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
        }),
        builder.linkedItemsElement({
          element: {
            codename: 'related_articles'
          },
          value: [
            {
              codename: 'coffee_processing_techniques'
            },
            {
              codename: 'origins_of_arabica_bourbon'
            }
          ]
        }),
        builder.textElement({
          element: {
            codename: 'meta_keywords'
          },
          value: 'asados, café'
        }),
        builder.textElement({
          element: {
            codename: 'meta_description'
          },
          value: 'Tostar granos de café puede tardar de 6 a 13 minutos. ...'
        }),
        builder.urlSlugElement({
          element: {
            codename: 'url_pattern'
          },
          mode: 'autogenerated',
          value: undefined
        }),
      ],
      workflow: {
        step_identifier: {
          codename: 'my_workflow_step'
        },
        workflow_identifier: {
          codename: 'my_workflow'
        }
      }
    }
  })
  .toPromise();
// EndDocSection