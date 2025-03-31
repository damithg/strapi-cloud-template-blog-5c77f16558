import type { Schema, Struct } from '@strapi/strapi';

export interface ContentEssentialInfo extends Struct.ComponentSchema {
  collectionName: 'components_content_essential_info';
  info: {
    displayName: 'Essential Info';
  };
  attributes: {
    accessibility: Schema.Attribute.JSON;
    bestTimeToVisit: Schema.Attribute.String;
    entranceFees: Schema.Attribute.JSON;
    highlights: Schema.Attribute.JSON;
    nearestAirport: Schema.Attribute.String;
    openingHours: Schema.Attribute.JSON;
    transportOptions: Schema.Attribute.JSON;
    travelTips: Schema.Attribute.JSON;
  };
}

export interface ContentFaq extends Struct.ComponentSchema {
  collectionName: 'components_content_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface ContentFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_content_feature_items';
  info: {
    displayName: 'Feature Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.gallery-image', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_content_feature_sections';
  info: {
    displayName: 'Feature Section';
  };
  attributes: {
    items: Schema.Attribute.Component<'content.feature-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface ContentHighlightItem extends Struct.ComponentSchema {
  collectionName: 'components_content_highlight_items';
  info: {
    displayName: 'Highlight Item';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

export interface ContentNearbyAttraction extends Struct.ComponentSchema {
  collectionName: 'components_content_nearby_attractions';
  info: {
    displayName: 'Nearby Attraction';
  };
  attributes: {
    description: Schema.Attribute.Text;
    distance: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.gallery-image', false>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface ContentOverviewSection extends Struct.ComponentSchema {
  collectionName: 'components_content_overview_sections';
  info: {
    displayName: 'Overview Section';
  };
  attributes: {
    fullDescription: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.gallery-image', false>;
    title: Schema.Attribute.String;
  };
}

export interface ContentQuoteBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_quote_blocks';
  info: {
    displayName: 'Quote Block';
  };
  attributes: {
    author: Schema.Attribute.String;
    content: Schema.Attribute.Text;
  };
}

export interface ContentRelatedTour extends Struct.ComponentSchema {
  collectionName: 'components_content_related_tours';
  info: {
    displayName: 'Related Tour';
  };
  attributes: {
    currency: Schema.Attribute.String;
    duration: Schema.Attribute.String;
    image: Schema.Attribute.Component<'shared.gallery-image', false>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    startingFrom: Schema.Attribute.Decimal;
    summary: Schema.Attribute.Text;
  };
}

export interface ContentVideoBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_video_blocks';
  info: {
    displayName: 'Video Block';
  };
  attributes: {
    title: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface SharedGalleryImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallery_images';
  info: {
    displayName: 'Gallery Image';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    orientation: Schema.Attribute.Enumeration<
      ['landscape', 'portrait', 'square']
    >;
    publicId: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.essential-info': ContentEssentialInfo;
      'content.faq': ContentFaq;
      'content.feature-item': ContentFeatureItem;
      'content.feature-section': ContentFeatureSection;
      'content.highlight-item': ContentHighlightItem;
      'content.nearby-attraction': ContentNearbyAttraction;
      'content.overview-section': ContentOverviewSection;
      'content.quote-block': ContentQuoteBlock;
      'content.related-tour': ContentRelatedTour;
      'content.video-block': ContentVideoBlock;
      'shared.gallery-image': SharedGalleryImage;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
