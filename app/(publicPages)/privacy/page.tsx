"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { useThemeContext } from "@/context/ThemeContext";
import { ContactModel } from "@/components/contact-model";

export default function Page() {
  const [open, setOpen] = useState(false);
  const { theme } = useThemeContext();
  return (
    <>
      <Header onOpenDialog={() => setOpen(true)} />
      <ContactModel open={open} onOpenChange={setOpen} />

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto px-8 py-10 md:px-14 md:py-14">
          {/* Header */}
          <div className="pb-8 mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xs font-semibold uppercase tracking-widest text-center mt-3">
              Last Updated: May 2024
            </p>
            <p className="mt-6 italic leading-relaxed text-base">
              This document explains how our agency collects, uses, processes,
              and protects your data when you engage with our{" "}
              <b className="font-semibold  not-italic">AI Automation</b>,{" "}
              <b className="font-semibold  not-italic">n8n Workflow</b>,{" "}
              <b className="font-semibold  not-italic">Voice Agent</b>, and{" "}
              <b className="font-semibold  not-italic">Digital Marketing</b>{" "}
              services. We are committed to ensuring that your privacy is
              protected and that we comply with global data protection
              standards.
            </p>
          </div>

          {/* Sections */}
          {[
            {
              num: "1",
              title: "Information We Collect",
              content: (
                <>
                  <p className="leading-relaxed">
                    In the course of providing advanced automation services, we
                    collect various types of information. This includes{" "}
                    <b className="font-semibold ">
                      Personal Identification Information
                    </b>{" "}
                    such as your name, email address, and phone number. We also
                    collect <b className="font-semibold ">Technical Data</b>{" "}
                    such as IP addresses and browser types when you interact
                    with our automated systems.
                  </p>
                  <p className="leading-relaxed mt-4">
                    For our <b className="font-semibold ">AI Voice Agent</b>{" "}
                    services, we may process voice recordings or transcripts to
                    improve machine learning models and ensure service quality.
                    For <b className="font-semibold ">n8n automation</b>, we may
                    handle API keys or access tokens provided by you to connect
                    your various software tools.
                  </p>
                </>
              ),
            },
            {
              num: "2",
              title: "How We Use Your Data",
              content: (
                <>
                  <p className="leading-relaxed">
                    We use the information collected primarily to deliver and
                    maintain our services. This includes building custom{" "}
                    <b className="font-semibold ">n8n workflows</b>, deploying{" "}
                    <b className="font-semibold ">AI-driven voice bots</b>, and
                    managing marketing campaigns. We also use data to improve
                    our AI models, ensuring that the automations become more
                    efficient and personalized over time.
                  </p>
                  <p className="leading-relaxed mt-4">
                    Your contact details may be used for communication purposes,
                    such as sending updates about your project, responding to
                    inquiries, or sharing marketing insights related to our
                    services.
                  </p>
                </>
              ),
            },
            {
              num: "3",
              title: "Data Processing and AI Automations",
              content: (
                <>
                  <h3 className="text-base font-bold  mt-2 mb-2">
                    AI and Machine Learning
                  </h3>
                  <p className="leading-relaxed">
                    When we deploy AI agents, your data may be processed through
                    third-party{" "}
                    <b className="font-semibold ">
                      LLM (Large Language Model) providers
                    </b>{" "}
                    like <b className="font-semibold ">OpenAI</b> or{" "}
                    <b className="font-semibold ">Anthropic</b>. We ensure that
                    these providers adhere to strict data privacy protocols and
                    that your data is{" "}
                    <b className="font-semibold ">
                      not used to train their public models
                    </b>{" "}
                    unless explicitly agreed upon.
                  </p>
                  <h3 className="text-base font-bold  mt-6 mb-2">
                    Automation Workflows
                  </h3>
                  <p className="leading-relaxed">
                    Using <b className="font-semibold ">n8n</b>, data flows
                    between your integrated applications. We act as{" "}
                    <b className="font-semibold ">data processors</b> in this
                    context, moving data according to the logic defined in your
                    custom workflows.
                  </p>
                </>
              ),
            },
            {
              num: "4",
              title: "Data Sharing and Disclosure",
              content: (
                <p className="leading-relaxed">
                  We{" "}
                  <b className="font-semibold ">
                    do not sell your personal data
                  </b>{" "}
                  to third parties. We only share information with trusted
                  third-party service providers who assist us in operating our
                  agency, such as{" "}
                  <b className="font-semibold ">cloud hosting services</b>,{" "}
                  <b className="font-semibold ">CRM platforms</b>, and{" "}
                  <b className="font-semibold ">API providers</b>. These parties
                  are contractually obligated to keep your information
                  confidential and secure.
                </p>
              ),
            },
            {
              num: "5",
              title: "Security of Your Information",
              content: (
                <p className="leading-relaxed">
                  We implement industry-standard security measures to protect
                  your data from unauthorized access, alteration, or
                  destruction. This includes{" "}
                  <b className="font-semibold ">
                    encryption of data in transit and at rest
                  </b>
                  , secure API management, and regular audits of our internal
                  automation scripts and n8n nodes.
                </p>
              ),
            },
            {
              num: "7",
              title: "Your Rights",
              content: (
                <p className="leading-relaxed">
                  We retain your information only for as long as necessary to
                  fulfill the purposes outlined in this policy or to comply with
                  legal obligations. For project-based AI automations,{" "}
                  <b className="font-semibold ">
                    data logs are typically cleared after a pre-determined
                    period
                  </b>{" "}
                  to maintain data hygiene.
                </p>
              ),
            },
            {
              num: "7",
              title: "Your Rights",
              content: (
                <p className="leading-relaxed">
                  Depending on your location, you have the right to{" "}
                  <b className="font-semibold ">access</b>,{" "}
                  <b className="font-semibold ">correct</b>, or{" "}
                  <b className="font-semibold ">delete</b> your personal data.
                  You may also{" "}
                  <b className="font-semibold ">object to the processing</b> of
                  your data for marketing purposes. To exercise these rights,
                  please contact our privacy officer directly.
                </p>
              ),
            },
            {
              num: "8",
              title: "Changes to This Policy",
              content: (
                <p className="leading-relaxed">
                  Our agency reserves the right to update this Privacy Policy at
                  any time. We will notify clients of significant changes via{" "}
                  <b className="font-semibold ">email</b> or through a prominent
                  notice on our{" "}
                  <b className="font-semibold ">service portals</b>.
                </p>
              ),
            },
          ].map(({ num, title, content }) => (
            <section
              key={num}
              className="mb-8 pb-8 last:border-none last:mb-0 last:pb-0"
            >
              <h2 className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 border border-stone-200 rounded px-2 py-0.5 bg-stone-50">
                  {num}
                </span>
                <span className="text-lg font-bold">{title}</span>
              </h2>
              {content}
            </section>
          ))}

          {/* Contact Section */}
          <section className="mb-0 pt-2">
            <h2 className="flex items-center gap-3 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 border border-stone-200 rounded px-2 py-0.5 bg-stone-50">
                9
              </span>
              <span className="text-lg font-bold">Contact Us</span>
            </h2>
            <p className="leading-relaxed mb-4">
              If you have any questions regarding this Privacy Policy or our
              data practices, please reach out:
            </p>
            <div className="px-5 py-4">
              <p className=" font-medium">
                Email:{" "}
                <a
                  href="mailto:support@youragency.com"
                  className="font-semibold hover:underline"
                >
                  support@youragency.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
