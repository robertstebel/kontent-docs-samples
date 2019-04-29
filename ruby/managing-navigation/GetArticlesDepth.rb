# DocSection: managing_navigation_articles_depth
require 'delivery-sdk-ruby'

delivery_client = KenticoCloud::Delivery::DeliveryClient.new project_id: '975bf280-fd91-488c-994c-2f04416e5ee3'
delivery_client.item('root_navigation_item')
               .depth(5)
               .execute do |response|
                 item = response.item
               end
# EndDocSection