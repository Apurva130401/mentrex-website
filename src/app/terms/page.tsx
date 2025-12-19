import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="container mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Terms of Service
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>

                <div className="prose prose-gray dark:prose-invert max-w-none">
                    <p>
                        Please read these Terms of Service carefully before using our website and services operated by Mentrex.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Service</h2>
                    <p>
                        You are responsible for your use of the service and for any consequences thereof. You may use the service only in compliance with these Terms and all applicable laws, rules, and regulations.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
                    <p>
                        The service and its original content, features, and functionality are and will remain the exclusive property of Mentrex and its licensors.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">4. Termination</h2>
                    <p>
                        We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">5. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at support@mentrex.shop.
                    </p>
                </div>
            </div>
        </div>
    );
}
