"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function TermsContent() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ delay: 0.5 }}
      className="min-h-screen flex flex-col pt-20 bg-black"
    >
      <h2 className="text-h2 pt-10 pb-10 lg:text-h3 text-white w-full text-center">
        Terms & Conditions
      </h2>
      <div className="mx-auto px-5 md:px-[5%] 2xl:px-0 py-10 container max-w-[1200px]">
        <article className="flex flex-col gap-5 text-white">
          <p className="py-5">
            <strong>Terms and Conditions — TaskGate</strong>
            <br />
            Last updated: November 25, 2025
          </p>
          <p className="text-base">
            Welcome to TaskGate (&quot;we&quot;, &quot;our&quot;, or
            &quot;us&quot;). These Terms and Conditions (&quot;Terms&quot;)
            govern your use of the TaskGate mobile application (&quot;App&quot;)
            and any related services we provide.
          </p>
          <p className="text-base">
            By downloading or using the App, you agree to these Terms. If you do
            not agree, please do not use TaskGate.
          </p>

          <h3 className="text-lg font-bold mt-6">1. Overview</h3>
          <p className="text-base">
            TaskGate is a mindful app usage tool that helps users build
            intentional digital habits. The app intercepts impulsive app opens
            and requires you to complete a quick task—such as breathing
            exercises, reflections, flashcards, or partner app challenges—before
            granting access. TaskGate promotes conscious awareness and healthier
            relationships with technology.
          </p>

          <h3 className="text-lg font-bold mt-6">2. Eligibility</h3>
          <p className="text-base">
            You must be at least 13 years old to use this app. By using
            TaskGate, you confirm that you meet this age requirement and are
            legally able to accept these Terms.
          </p>
          <h3 className="text-lg font-bold mt-6">3. Use of the App</h3>
          <p className="text-base">When using TaskGate, you agree to:</p>
          <ul className="list-disc list-inside text-base ml-4">
            <li>Use the app only for lawful purposes</li>
            <li>
              Not attempt to bypass, disable, or circumvent any security or
              access control features
            </li>
            <li>
              Not reverse engineer, decompile, or disassemble the app or any
              part of it
            </li>
            <li>
              Not use the app to infringe on the rights of others or violate any
              applicable laws
            </li>
          </ul>

          <h3 className="text-lg font-bold mt-6">4. Premium Subscription</h3>
          <p className="text-base">
            TaskGate offers optional premium features through in-app purchases.
            Premium subscriptions are billed on a recurring basis (monthly or
            annually) and will auto-renew unless cancelled at least 24 hours
            before the end of the current period. You can manage or cancel your
            subscription through your device&apos;s app store settings.
          </p>

          <h3 className="text-lg font-bold mt-6">5. Partner Apps</h3>
          <p className="text-base">
            TaskGate integrates with third-party partner apps to provide
            mini-task experiences. We are not responsible for the content,
            privacy practices, or functionality of these partner apps. Your use
            of partner apps is subject to their respective terms and privacy
            policies.
          </p>

          <h3 className="text-lg font-bold mt-6">6. Intellectual Property</h3>
          <p className="text-base">
            All content, features, and functionality of the TaskGate app,
            including but not limited to text, graphics, logos, icons, and
            software, are the exclusive property of TaskGate and are protected
            by copyright, trademark, and other intellectual property laws.
          </p>

          <h3 className="text-lg font-bold mt-6">7. Privacy</h3>
          <p className="text-base">
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and protect your information. By
            using TaskGate, you consent to the practices described in our
            Privacy Policy.
          </p>

          <h3 className="text-lg font-bold mt-6">8. Disclaimer of Warranties</h3>
          <p className="text-base">
            TaskGate is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, either express or implied. We do not
            guarantee that the app will be error-free, secure, or continuously
            available.
          </p>

          <h3 className="text-lg font-bold mt-6">9. Limitation of Liability</h3>
          <p className="text-base">
            To the fullest extent permitted by law, TaskGate and its affiliates
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising from your use of the app.
          </p>

          <h3 className="text-lg font-bold mt-6">10. Changes to Terms</h3>
          <p className="text-base">
            We reserve the right to modify these Terms at any time. We will
            notify you of significant changes by updating the &quot;Last
            updated&quot; date at the top of this page. Your continued use of
            the app after changes constitutes acceptance of the new Terms.
          </p>

          <h3 className="text-lg font-bold mt-6">11. Termination</h3>
          <p className="text-base">
            We may suspend or terminate your access to TaskGate at any time,
            without prior notice, for conduct that we believe violates these
            Terms or is harmful to other users, us, or third parties.
          </p>

          <h3 className="text-lg font-bold mt-6">12. Governing Law</h3>
          <p className="text-base">
            These Terms shall be governed by and construed in accordance with
            the laws of the jurisdiction in which TaskGate operates, without
            regard to its conflict of law provisions.
          </p>

          <h3 className="text-lg font-bold mt-6">13. Contact Us</h3>
          <p className="text-base">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-base mt-2">
            <strong>Email:</strong> support@taskgate.co
          </p>

          <p className="text-center mt-10">
            By using TaskGate, you acknowledge that you have read, understood,
            and agree to be bound by these Terms and Conditions.
          </p>
        </article>
      </div>
    </motion.section>
  );
}
