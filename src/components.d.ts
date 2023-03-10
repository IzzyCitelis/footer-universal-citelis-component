/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CitelisFooter {
        "data": string[];
        "fetchPokemon": (name: any) => Promise<any>;
        "image": string;
        "negocios": [];
        "position": string;
        "show": boolean;
    }
    interface FooterCitelisComponent {
        "text": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        "image": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLCitelisFooterElement extends Components.CitelisFooter, HTMLStencilElement {
    }
    var HTMLCitelisFooterElement: {
        prototype: HTMLCitelisFooterElement;
        new (): HTMLCitelisFooterElement;
    };
    interface HTMLFooterCitelisComponentElement extends Components.FooterCitelisComponent, HTMLStencilElement {
    }
    var HTMLFooterCitelisComponentElement: {
        prototype: HTMLFooterCitelisComponentElement;
        new (): HTMLFooterCitelisComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "citelis-footer": HTMLCitelisFooterElement;
        "footer-citelis-component": HTMLFooterCitelisComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface CitelisFooter {
        "data"?: string[];
        "image"?: string;
        "negocios"?: [];
        "position"?: string;
        "show"?: boolean;
    }
    interface FooterCitelisComponent {
        "text"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        "image"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "citelis-footer": CitelisFooter;
        "footer-citelis-component": FooterCitelisComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "citelis-footer": LocalJSX.CitelisFooter & JSXBase.HTMLAttributes<HTMLCitelisFooterElement>;
            "footer-citelis-component": LocalJSX.FooterCitelisComponent & JSXBase.HTMLAttributes<HTMLFooterCitelisComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
