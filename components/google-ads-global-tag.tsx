const GOOGLE_ADS_ID = 'AW-18555961500';

export function GoogleAdsGlobalTag() {
  return (
    <>
      <script
        id="mundonatal-google-ads-loader"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <script
        id="mundonatal-google-ads-bootstrap"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];window.gtag=window.gtag||function(){window.dataLayer.push(arguments);};window.gtag('js',new Date());window.gtag('config','${GOOGLE_ADS_ID}',{send_page_view:false});`,
        }}
      />
    </>
  );
}
