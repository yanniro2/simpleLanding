// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: jfAbgkDv1HePNtHddFWkJP
// Component: Qlzmo9erFVeD

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Header from "../../Header"; // plasmic-import: tBMB-7Abqtl1/component
import Section from "../../Section"; // plasmic-import: ntr7QRlQeW3g/component
import Button from "../../Button"; // plasmic-import: qjtVIIUNdKpZ/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: SHI04kFwDPz-/component
import Testimonial from "../../Testimonial"; // plasmic-import: rsHH1DbJPDok/component
import HomeCta from "../../HomeCta"; // plasmic-import: cGhJdSrg4JXj/component
import Footer from "../../Footer"; // plasmic-import: gMNm3lMQs-CR/component

import { useScreenVariants as useScreenVariantspUqj8UI0BtK } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: P_uqj8uI0btK/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: jfAbgkDv1HePNtHddFWkJP/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: Qlzmo9erFVeD/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: auiPLXu8dfCT/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: rLCbGkmJt5bs/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: sHi1_RaqKdMy/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: 0lGt4oH5OmkQ/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: SJhWgdOUhhCO/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: dKGanGbwfvK7/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: uX_Z8xGXlTDd/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: kp-91dheumy_/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: 8qIOPHDOunqG/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: -qse57pJ9-vI/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: hoc4WePsfn0B/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: WaKFoLoeOxNo/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: uuHJwuaJAIT5/icon

createPlasmicElementProxy;

export type PlasmicHome__VariantMembers = {};
export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  topSection?: Flex__<typeof Section>;
  solutions?: Flex__<typeof Section>;
  columns?: Flex__<"div">;
  howItWorks?: Flex__<typeof Section>;
  validation?: Flex__<typeof Section>;
  testimonial?: Flex__<typeof Testimonial>;
  homeCta?: Flex__<typeof HomeCta>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultHomeProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspUqj8UI0BtK()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"topSection"}
            data-plasmic-override={overrides.topSection}
            className={classNames("__wab_instance", sty.topSection)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w9Hd)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__a4Yzb)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__qa12D)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7T08G
                    )}
                  >
                    {"Make your website"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yZf30
                    )}
                  >
                    {"wonderful"}
                  </div>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__iuGv
                  )}
                >
                  {
                    "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                  }
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___6KmTr)}
              >
                <Button
                  className={classNames("__wab_instance", sty.button__bJ8X5)}
                  color={"blue"}
                  endIcon={
                    <RightArrowIcon
                      className={classNames(projectcss.all, sty.svg__iiQD)}
                      role={"img"}
                    />
                  }
                  showEndIcon={true}
                  submitsForm={true}
                >
                  {"Start free trial"}
                </Button>
                <Button
                  className={classNames("__wab_instance", sty.button__y39Zd)}
                  submitsForm={true}
                >
                  {"Learn more"}
                </Button>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__knYw)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__ce6Z9)}
                  displayHeight={"100%"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/heroImage.png",
                    fullWidth: 1536,
                    fullHeight: 864,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
          </Section>
          <Section
            data-plasmic-name={"solutions"}
            data-plasmic-override={overrides.solutions}
            className={classNames("__wab_instance", sty.solutions)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"Explore the solutions"}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"columns"}
              data-plasmic-override={overrides.columns}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns)}
            >
              <div className={classNames(projectcss.all, sty.column__koGcE)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__bm2XW)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__znr
                    )}
                  >
                    {"Powerful suite of tools"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__m8Cnc
                    )}
                  >
                    {
                      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                    }
                  </div>
                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__sx9Qo
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <LightningIcon
                        className={classNames(projectcss.all, sty.svg___6V6Dy)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__f76Qc
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <HammerIcon
                        className={classNames(projectcss.all, sty.svg__mX1Lt)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />

                  <FeatureCard
                    className={classNames(
                      "__wab_instance",
                      sty.featureCard__mSiqY
                    )}
                    description={
                      "Taking collaboration to the next level with security and administrative features built for teams"
                    }
                    iconBack={
                      <PencilIcon
                        className={classNames(projectcss.all, sty.svg___5EBhj)}
                        role={"img"}
                      />
                    }
                    long={true}
                    title={"Building the Simple Ecosystem"}
                  />
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.column__ic0Gr)}>
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__bBqht)}
                  displayHeight={"auto"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"100%"}
                  src={{
                    src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                    fullWidth: 1000,
                    fullHeight: 924,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </Stack__>
          </Section>
          <Section
            data-plasmic-name={"howItWorks"}
            data-plasmic-override={overrides.howItWorks}
            className={classNames("__wab_instance", sty.howItWorks)}
            color={"halfDark"}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"How Simple works"}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___7GJqf)}
            >
              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__wSbYu)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SwapIcon
                    className={classNames(projectcss.all, sty.svg__seWgg)}
                    role={"img"}
                  />
                }
                title={"Initial Contact"}
              />

              <FeatureCard
                className={classNames(
                  "__wab_instance",
                  sty.featureCard___0SOge
                )}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <SlotIcon
                    className={classNames(projectcss.all, sty.svg__tztt)}
                    role={"img"}
                  />
                }
                title={"Discovery Session"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__miPly)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <CycleIcon
                    className={classNames(projectcss.all, sty.svg__mB6Ut)}
                    role={"img"}
                  />
                }
                title={"Contracting"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__p4NSp)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <HammerIcon
                    className={classNames(projectcss.all, sty.svg__iTngd)}
                    role={"img"}
                  />
                }
                title={"Fast Prototyping"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__um5M5)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <PencilIcon
                    className={classNames(projectcss.all, sty.svg__jri0W)}
                    role={"img"}
                  />
                }
                title={"Design Phase"}
              />

              <FeatureCard
                className={classNames("__wab_instance", sty.featureCard__ro4Sm)}
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
                iconFront={
                  <LightningIcon
                    className={classNames(projectcss.all, sty.svg___1OnOj)}
                    role={"img"}
                  />
                }
                title={"Develop & Launch"}
              />
            </Stack__>
            <div className={classNames(projectcss.all, sty.freeBox__tVsC)} />
          </Section>
          <Section
            data-plasmic-name={"validation"}
            data-plasmic-override={overrides.validation}
            className={classNames("__wab_instance", sty.validation)}
            hasSubtitle={true}
            hasTitle={true}
            subtitle={
              "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
            }
            title={"Trusted by over 20,000 companies all over the world"}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__lefpr)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rXxZh)}
              >
                <FacebookLogoIcon
                  className={classNames(projectcss.all, sty.svg__fYzmh)}
                  role={"img"}
                />

                <TinderLogoIcon
                  className={classNames(projectcss.all, sty.svg__ewLz2)}
                  role={"img"}
                />

                <AirbnbLogoIcon
                  className={classNames(projectcss.all, sty.svg__eLebd)}
                  role={"img"}
                />

                <HubspotLogoIcon
                  className={classNames(projectcss.all, sty.svg__jPgM)}
                  role={"img"}
                />

                <AmazonLogoIcon
                  className={classNames(projectcss.all, sty.svg__fuLtl)}
                  role={"img"}
                />
              </Stack__>
              <Testimonial
                data-plasmic-name={"testimonial"}
                data-plasmic-override={overrides.testimonial}
                className={classNames("__wab_instance", sty.testimonial)}
              />
            </Stack__>
          </Section>
          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  solutions: typeof Section;
  columns: "div";
  howItWorks: typeof Section;
  validation: typeof Section;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHome__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */