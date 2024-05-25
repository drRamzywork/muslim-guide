// src/components/withData.js
import React from "react";

const withData = (WrappedComponent) => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      const locale = ctx.locale || "ar";

      const fetchData = async (url, locale) => {
        try {
          const response = await fetch(`https://iiacademy.net/api/${url}`, {
            headers: { locale: locale },
          });
          if (!response.ok) {
            throw new Error(`Failed to fetch ${url}`);
          }
          return await response.json();
        } catch (error) {
          console.error(error);
          return null;
        }
      };

      const dataAllSections = await fetchData("categories", locale);
      const dataAllLangs = await fetchData("languages", locale);
      const dataPreliminaries = await fetchData("preliminaries", locale);
      const dataAllSettings = await fetchData("settings", locale);

      const pageProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : {};

      return {
        ...pageProps,
        dataAllSections: dataAllSections?.data || [],
        dataAllLangs: dataAllLangs?.data || [],
        dataPreliminaries: dataPreliminaries?.data || [],
        dataAllSettings: dataAllSettings?.data || [],
      };
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withData;
