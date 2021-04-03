import { gql } from "@apollo/client";

export const GET_ALLCATEGORYURL = gql`
  {
    reactRout {
      urlKeyCategory {
        category_id
        name
        path
        url_path
        url_key
      }
    }
    cmsPages {
      allPages {
        identifier
        name
        page_layout
        content
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query category($categoryid: String) {
    categoryList(filters: { ids: { eq: $categoryid } }) {
      children_count
      children {
        id
        level
        name
        titlecat
        path
        url_path
        url_key
        include_in_menu
        children {
          id
          level
          name
          titlecat
          path
          url_path
          url_key
          include_in_menu
        }
      }
    }
    cmsPages {
      allPages {
        name
        identifier
        content
        page_layout
      }
    }
    productCollection {
      allProducts {
        id
        sku
        name
        url_key
      }
    }
    blogLists {
      listAllBlog {
        post_id
        url_key
      }
    }
  }
`;

export const GET_CATEGORY = gql`
  query category($categoryid: String) {
    categoryList(filters: { ids: { eq: $categoryid } }) {
      id
      image
      name
      description
      url_key
      meta_title
      meta_keywords
      meta_description
      children {
        id
        level
        name
        image
        titlecat
        path
        url_path
        url_key
        children {
          id
          level
          name
          image
          titlecat
          path
          url_path
          url_key
        }
      }
      products {
        total_count
        items {
          id
          sku
          name
          url_key
          stock_status
          image {
            url
            label
            position
          }
          small_image {
            url
            label
            position
          }
          thumbnail {
            url
            label
            position
          }
          short_description {
            html
          }
          description {
            html
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
            maximum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
          }
          new_from_date
          new_to_date
          special_price
          special_from_date
          special_to_date
          gift_message_available
          country_of_manufacture
          price_tiers {
            quantity
            final_price {
              value
              currency
            }
            discount {
              amount_off
              percent_off
            }
          }
        }
        page_info {
          current_page
          page_size
        }
      }
    }
  }
`;
/*
export const GET_PAGE_SIZE = gql`
    query getPageSize {
        storeConfig {
            id
            product_url_suffix
            category_url_suffix
            title_separator
            list_mode
            grid_per_page_values
            list_per_page_values
            grid_per_page
            list_per_page
            catalog_default_sort_by
        }
    }
`;
*/
export const GET_ALLCATEGORYPRODUCTS = gql`
  query productlist(
    $currentPage: Int = 1
    $inputText: String!
    $pageSize: Int = 6
    $filters: ProductAttributeFilterInput!
    $sort: ProductAttributeSortInput
  ) {
    products(
      currentPage: $currentPage
      pageSize: $pageSize
      search: $inputText
      filter: $filters
      sort: $sort
    ) {
      total_count
      filters {
        name
        filter_items_count
        request_var
        filter_items {
          label
          value_string
        }
      }
      items {
        id
        sku
        name
        url_key
        stock_status
        image {
          url
          label
          position
        }
        small_image {
          url
          label
          position
        }
        thumbnail {
          url
          label
          position
        }
        short_description {
          html
        }
        description {
          html
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
        new_from_date
        new_to_date
        special_price
        special_from_date
        special_to_date
        gift_message_available
        country_of_manufacture
        price_tiers {
          quantity
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
    }
  }
`;

/** get All blog category */
export const GET_BLOGCATEGORIES = gql`
  {
    blogCategory {
      listAllCategory {
        category_id
        name
        url_key
        status
        sort_order
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        blogList {
          listAllBlog {
            post_id
            title
            status
            blogimage
            url_key
            use_comments
            short_content
            full_content
            posted_by
            meta_title
            meta_tags
            meta_description
            created_at
            updated_at
            published_at
            user_define_publish
            notify_on_enable
            display_short_content
            comments_enabled
            views
          }
        }
      }
    }
  }
`;

/** get All blog category */
export const GET_BLOGCATEGORY = gql`
  {
    blogCategory(category_id: 2) {
      listAllCategory {
        category_id
        name
        url_key
        status
        sort_order
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        blogList {
          listAllBlog {
            post_id
            title
            status
            blogimage
            url_key
            use_comments
            short_content
            full_content
            posted_by
            meta_title
            meta_tags
            meta_description
            created_at
            updated_at
            published_at
            user_define_publish
            notify_on_enable
            display_short_content
            comments_enabled
            views
          }
        }
      }
    }
  }
`;

/** get one blog by blog id */
export const GET_SINGLE_BLOG = gql`
  query blogData($post_id: Int) {
    blogList(post_id: $post_id) {
      listAllBlog {
        post_id
        title
        status
        blogimage
        url_key
        use_comments
        short_content
        full_content
        posted_by
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        published_at
        user_define_publish
        notify_on_enable
        display_short_content
        comments_enabled
        views
      }
    }
    AllBlog: blogLists {
      listAllBlog {
        count
        post_id
        title
        status
        blogimage
        url_key
        use_comments
        short_content
        full_content
        posted_by
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        published_at
        user_define_publish
        notify_on_enable
        display_short_content
        comments_enabled
        views
      }
    }
  }
`;

/** get list of all blog and paging */
export const GET_BLOGWITHPAGINGDATA = gql`
  query ListNewsOnHome($limit: Int, $page: Int) {
    blogList(limit: $limit, page: $page) {
      listAllBlog {
        post_id
        title
        status
        blogimage
        url_key
        use_comments
        short_content
        full_content
        posted_by
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        published_at
        user_define_publish
        notify_on_enable
        display_short_content
        comments_enabled
        views
      }
    }
  }
`;

/** get list of all blogs */
export const GET_ALLBLOGLISTS = gql`
  {
    blogLists {
      listAllBlog {
        count
        post_id
        title
        status
        blogimage
        url_key
        use_comments
        short_content
        full_content
        posted_by
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        published_at
        user_define_publish
        notify_on_enable
        display_short_content
        comments_enabled
        views
      }
    }
  }
`;

/** get list of all category */
export const GET_ALLPRODUCTCATEGORY = gql`
  {
    categoryAll {
      allCategory {
        category_id
        name
        level
        path
        url_path
        url_key
        image
        description
      }
    }
  }
`;

/*
export const GET_CMSPAGES = gql`
    {
        cmsPages {
            allPages {
                name
                identifier
                content
                page_layout
            }
        }
    }
`;
*/

export const GET_CMSPAGE = gql`
  query cmsPageDetail($identifier: String) {
    cmsPage(identifier: $identifier) {
      identifier
      url_key
      title
      content
      content_heading
      page_layout
      meta_title
      meta_description
      meta_keywords
    }
  }
`;

export const GET_ALLBANNERS = gql`
  query banners($sliderId: Int = 1) {
    allBanners(slider_id: $sliderId) {
      listBanners {
        banner_id
        name
        slidertitle
        sliderdescription
        order_banner
        slider_id
        click_url
        image
        image_alt
        width
        height
      }
    }
  }
`;

export const GET_STORECONFIG = `
storeConfig {
    id
    header_logo_src
    logo_alt
    logo_height
    logo_width
    head_shortcut_icon
    product_url_suffix
    category_url_suffix
    title_separator
    list_mode
    grid_per_page_values
    list_per_page_values
    grid_per_page
    list_per_page
    catalog_default_sort_by
}`;

export const GET_ALLATTRIBUTEFILTERONCATEGRY = gql`
  query category($categoryid: String) {
    products(filter: { category_id: { eq: $categoryid } }) {
      total_count
      aggregations {
        attribute_code
        label
        count
        options {
          count
          label
          value
        }
      }
    }
  }
`;

export const GET_ATTRIBUTEDEATILS_BY_CODE = gql`
  query attributes($attribute_code: String) {
    customAttributeMetadata(
      attributes: [
        { attribute_code: $attribute_code, entity_type: "catalog_product" }
      ]
    ) {
      items {
        attribute_code
        attribute_type
        entity_type
        input_type
        attribute_options {
          value
          label
        }
      }
    }
  }
`;

/** get all details for category page and product listing */
export const CATEGORY_PAGE_ALL_QUERY = gql`
query productlist(
  $currentPage: Int = 1,
  $inputText: String!,
  $pageSize: Int = 6,
  $filters: ProductAttributeFilterInput!,
  $sort: ProductAttributeSortInput,
  $categoryid: String,
  $attribute_code: String
  ){
  products(
      currentPage: $currentPage,
      pageSize: $pageSize,
      search: $inputText,
      filter: $filters,
      sort: $sort
    ) 
    {
    total_count
    aggregations{
      attribute_code
      label
      count
      options{
        count
        label
        value
      }
    }
    filters{
        name
        filter_items_count
        request_var
        filter_items{
          label
          value_string
        }
      }
    items {
        id
        sku
        name
        url_key
        stock_status
        length
        maxguests
        cabins
        sleeps
        formaldining
        locationsummer
        locationwinter
        boatname
        productattribute
        paymenttype
        builder
        exterior_designer
        upgrades
        videoid
        year
        location
        high_season
        low_season
        daycruise
        day_cruise_4hr
        daycruise_8hr
        additionalhours
        overnight
        weekly
        weekly_usd
        catering
        image {
          url
          label
          position
        }
        small_image {
          url
          label
          position
        }
        thumbnail {
          url
          label
          position
        }
        short_description {
          html
        }
        description {
          html
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
        new_from_date
        new_to_date
        special_price
        special_from_date
        special_to_date
        gift_message_available
        country_of_manufacture
        price_tiers {
          quantity
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
  }
  ${GET_STORECONFIG}
  categoryList(filters: {ids: {eq: $categoryid}}) {
    id
    image
    name
    description
    url_key
    meta_title
    meta_keywords
    meta_description
    children {
      id
      level
      name
      image
      titlecat
      path
      url_path
      url_key
      children {
        id
        level
        name
        image
        titlecat
        path
        url_path
        url_key
      }
    }
    products {
      total_count
      items {
        id
        sku
        name
        url_key
        stock_status
        image {
          url
          label
          position
        }
        small_image {
          url
          label
          position
        }
        thumbnail {
          url
          label
          position
        }
        short_description {
          html
        }
        description {
          html
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
        new_from_date
        new_to_date
        special_price
        special_from_date
        special_to_date
        gift_message_available
        country_of_manufacture
        price_tiers {
          quantity
          final_price {
            value
            currency
          }
          discount {
            amount_off
            percent_off
          }
        }
      }
      page_info {
        current_page
        page_size
      }
    }
  }
  customAttributeMetadata(
    attributes: [
      {
        attribute_code: $attribute_code
        entity_type: "catalog_product"
      }
    ]
  ) {
    items {
      attribute_code
      attribute_type
      entity_type
      input_type
      attribute_options {
       value
       label
     }
    }
  }
}`;

/** get product details for product page */
export const GET_PRODUCT_BY_SKU = gql`
  query productdata($productsku: String!) {
    products(filter: { sku: { eq: $productsku } }) {
      items {
        id
        name
        sku
        url_key
        customattributes {
          MultiSelectAttributes {
            attributeenable
            location
            locationsummer
            locationwinter
            paymenttype
            catering
            byo
          }
        }
        attributeenable
        location
        locationsummer
        locationwinter
        paymenttype
        catering
        byo
        additional_information
        length
        maxguests
        cabins
        sleeps
        formaldining
        boatname
        productattribute
        builder
        exterior_designer
        upgrades
        videoid
        year
        high_season
        low_season
        daycruise
        day_cruise_4hr
        daycruise_8hr
        additionalhours
        overnight
        weekly
        weekly_usd
        stock_status
        new_from_date
        new_to_date
        special_price
        special_from_date
        special_to_date
        short_description {
          html
        }
        description {
          html
        }
        categories {
          id
          name
          is_anchor
          url_key
          url_path
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
          maximum_price {
            regular_price {
              value
              currency
            }
            final_price {
              value
              currency
            }
          }
        }
        additional_information
        attribute_set_id
        meta_title
        meta_keyword
        meta_description
        manufacturer
        country_of_manufacture
        gift_message_available
        image {
          url
          label
        }
        small_image {
          url
          label
        }
        thumbnail {
          url
          label
        }
        swatch_image
        media_gallery {
          url
          label
        }
        categories {
          id
          name
          is_anchor
          url_key
          url_path
          level
          display_mode
          default_sort_by
          description
        }
        related_products {
          id
          name
          sku
          paymenttype
          url_key
          image {
            url
            label
            position
          }
          small_image {
            url
            label
            position
          }
          thumbnail {
            url
            label
            position
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
            maximum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
          }
        }
        upsell_products {
          id
          name
          sku
          paymenttype
          url_key
          image {
            url
            label
            position
          }
          small_image {
            url
            label
            position
          }
          thumbnail {
            url
            label
            position
          }
          price_range {
            minimum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
            maximum_price {
              regular_price {
                value
                currency
              }
              final_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ALL_HOME_SECTION_DATA = gql`
  query HomePageData(
    $mainslider: Int
    $fourboxdata: Int
    $identifier: String
    $limit: Int
    $page: Int
  ) {
    mainbanner: allBanners(slider_id: $mainslider) {
      listBanners {
        banner_id
        name
        slidertitle
        sliderdescription
        order_banner
        slider_id
        click_url
        image
        image_alt
        width
        height
      }
    }
    fourboxbanner: allBanners(slider_id: $fourboxdata) {
      listBanners {
        banner_id
        name
        slidertitle
        sliderdescription
        order_banner
        slider_id
        click_url
        image
        image_alt
        width
        height
      }
    }
    cmsPage(identifier: $identifier) {
      identifier
      url_key
      title
      content
      content_heading
      page_layout
      meta_title
      meta_description
      meta_keywords
    }
    blogList(limit: $limit, page: $page) {
      listAllBlog {
        post_id
        title
        status
        blogimage
        url_key
        use_comments
        short_content
        full_content
        posted_by
        meta_title
        meta_tags
        meta_description
        created_at
        updated_at
        published_at
        user_define_publish
        notify_on_enable
        display_short_content
        comments_enabled
        views
      }
    }
  }
`;

export const sendEnquiryData = gql`
  mutation PostEnquiryData(
    $itemid: Int
    $firstname: String
    $lastname: String
    $apistatus: Int = 0
    $companyname: String
    $comments: String
    $phone: String
    $altPhone: String
    $email: String
    $custentity_min_no_of_guests: Int
    $custentity_max_no_of_guests: Int
    $custentity_duration_type: String
    $custentity_duration: String
    $custentity_lead_cruise_date: String
    $custentity_number_person: String
    $custentity_how_did_you_hear_about_us: String
    $custentity_event_type: String
    $custentity_est_start_time: String
    $custentity_product_name_magento: String
    $description: String
  ) {
    createNewEnquiry(
      input: {
        itemid: $itemid
        firstName: $firstname
        lastName: $lastname
        apistatus: $apistatus
        companyName: $companyname
        comments: $comments
        phone: $phone
        altPhone: $altPhone
        email: $email
        custentity_min_no_of_guests: $custentity_min_no_of_guests
        custentity_max_no_of_guests: $custentity_max_no_of_guests
        custentity_duration_type: $custentity_duration_type
        custentity_duration: $custentity_duration
        custentity_lead_cruise_date: $custentity_lead_cruise_date
        custentity_number_person: $custentity_number_person
        custentity_how_did_you_hear_about_us: $custentity_how_did_you_hear_about_us
        custentity_event_type: $custentity_event_type
        custentity_est_start_time: $custentity_est_start_time
        custentity_product_name_magento: $custentity_product_name_magento
        description: $description
      }
    ) {
      apisuccess
      enquiryid
    }
  }
`;

export const SUBSCRIBEFORNEWSLETTER = gql`
  mutation PostNewLetterEmail($email: String!) {
    subscribeEmailToNewsletter(email: $email) {
      status
    }
  }
`;

export const GET_SEARCH_RESULT = gql`
  query productdata($search: String, $filters: ProductAttributeFilterInput!) {
    products(filter: $filters, search: $search, pageSize: 10) {
      total_count
      items {
        id
        name
        sku
        url_key
        small_image {
          url
          label
          position
        }
        short_description {
          html
        }
        price_range {
          minimum_price {
            regular_price {
              value
              currency
            }
          }
        }
      }
      page_info {
        page_size
        current_page
      }
    }
  }
`;
