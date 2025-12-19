import Link from "next/link";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                        At Mentrex, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience. We may also use your information to send you updates, security alerts, and support messages.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
                    <p>
                        We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Your Rights</h2>
                    <p>
                        You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at support@mentrex.shop.
                    </p>
                </div>
            </div>
        </div>
    );
}
