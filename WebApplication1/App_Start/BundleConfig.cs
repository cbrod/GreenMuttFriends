﻿using System.Web;
using System.Web.Optimization;

namespace WebApplication1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/umd/popper.js", "~/Scripts/bootstrap.js"));

            bundles.Add(new ScriptBundle("~/bundles/calendar").Include(
                        "~/Scripts/moment-*",
                        "~/Scripts/daterangepicker.js",
                        "~/Scripts/calendar.js"
            ));

            bundles.Add(new ScriptBundle("~/bundles/graphs").Include(
                        "~/Scripts/calculatestatistics.js",
                        "~/Scripts/chartvalidandinvalid.js",
                        "~/Scripts/chartinstalls.js",
                        "~/Scripts/chartphotostaken.js",
                        "~/Scripts/chartavgphotostaken.js",
                        "~/Scripts/dailyPhotosTaken.js"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/styles").Include(
                        "~/Scripts/togglestyle.js"
                        ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/daterangepicker.css",
                      "~/Content/font-awesome.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/library").Include(
                    "~/Scripts/librarysearch.js",
                    "~/Scripts/libraryfiltersaver.js"
                    ));

            bundles.Add(new ScriptBundle("~/bundles/map").Include(
                    "~/Scripts/d3-geo.v1.min.js",
                    "~/Scripts/d3plus-geomap.v0.6.full.min.js",
                    "~/Scripts/clinic_map.js"
                    ));
        }
    }
}
