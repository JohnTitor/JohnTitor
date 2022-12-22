/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  tiers: [
    {
      title: "Past Sponsors",
      duration: -1,
      preset: presets.xs,
    },
    {
      title: "New Sponsors",
    },
    {
      title: "3 Months Sponsors",
      duration: 7884000,
      preset: presets.medium,
      // to insert custom elements after the tier block
      composeAfter: (composer, tierSponsors, config) => {
        composer.addSpan(10);
      },
    },
    {
      title: "6 Months Sponsors",
      duration: 15768000,
      preset: presets.large,
    },
    {
      title: "Over 1 Year Sponsors",
      duration: 31536000,
      preset: presets.xl,
    },
  ],
});
