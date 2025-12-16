(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/contact/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../Images/Homeimages/1st.jpg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client'; // App Router ke liye (optional)
;
;
;
;
function ContactPage() {
    const htmlString = `
    <div>
      <section class="bg-primary text-white py-5">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-8">
              <h1 class="display-4 fw-bold mb-3">Contact Us</h1>
              <p class="lead mb-0">
                Have questions about custom sportswear, bulk production, or private-label manufacturing? 
                Our team is here to help! We provide fast support for quotes, samples, pricing, fabric options, 
                and full-cycle sportswear production!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <Image 
                src={ContImg} 
                alt="Contact Image" 
                className="img-fluid rounded shadow-lg" 
                width={600}
                height={400}
                style={{ height: '400px', objectFit: 'cover' }}
                priority
              />
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="card p-4 shadow-sm border-0 h-100">
                <div class="card-body">
                  <h3 class="mb-4">Get In Touch</h3>
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label>Name *</label>
                        <input type="text" class="form-control" required />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label>Phone</label>
                        <input type="tel" class="form-control" />
                      </div>
                    </div>

                    <div class="mb-3">
                      <label>Email *</label>
                      <input type="email" class="form-control" required />
                    </div>

                    <div class="mb-4">
                      <label>Message *</label>
                      <textarea rows="4" class="form-control" required placeholder="Aapka message yahan likhein..."></textarea>
                    </div>

                    <button class="btn btn-primary w-100 py-2 fw-bold">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="container my-5">
        <div class="row">
          <div class="col-md-4">
            <div class="card border-0 shadow-sm text-center h-100 contact-card">
              <div class="contact-icon-wrap mx-auto mt-4">
                🌎
              </div>
              <div class="card-body">
                <h5 class="mb-3">Address</h5>
                <p>3680 Wilshire Blvd Ste P04 - 1524 Los Angeles, CA 90010 United States</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm text-center h-100 contact-card">
              <div class="contact-icon-wrap mx-auto mt-4">
                📞
              </div>
              <div class="card-body">
                <h5 class="mb-3">Phone</h5>
                <p class="text-warning fw-semibold">+1-909-329-2103</p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card border-0 shadow-sm text-center h-100 contact-card">
              <div class="contact-icon-wrap mx-auto mt-4">
                ✉️
              </div>
              <div class="card-body">
                <h5 class="mb-3">Email</h5>
                <p class="text-warning fw-semibold">info@megaapparel.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="py-5 bg-light">
        <div class="container-fluid">
          <h3 class="text-center mb-5">Our Location</h3>
          <div class="w-100 rounded shadow-lg overflow-hidden" style="height:300px;">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.699614614614!2d-118.297968!3d34.061572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc7e6b4e8b1d%3A0x8e8e8e8e8e8e8e8e!2s3680%20Wilshire%20Blvd%2C%20Los%20Angeles%20CA%2090010!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus" 
              width="100%" 
              height="300" 
              style="border:0;" 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: parse(htmlString)
    }, void 0, false);
}
_c = ContactPage;
const __TURBOPACK__default__export__ = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_contact_page_b7280b31.js.map