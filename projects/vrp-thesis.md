---
sidebar_position: 1
sidebar_label: Route Re-optimization
title: Route Re-optimization for Waste Collection
description: Master's thesis on keeping waste-collection routes familiar to drivers while re-optimizing them for fluctuating demand.
hide_title: true
hide_table_of_contents: true
---

import {
  ThesisHero, KeyNumbers, Section, Approach, Objective,
  Metrics, TradeoffChart, Findings, Closing,
} from '@site/src/components/Thesis';

<ThesisHero />

<KeyNumbers />

<Section label="The problem" title="The shortest route isn't always the fastest one to drive">

Waste trucks follow fixed periodic routes that drivers and collectors know well. When volumes change (holidays, summer tourism, a snow day), the obvious fix is to re-optimize for distance. The result can look nothing like the usual route, though, and practitioners told us that unfamiliar streets and bins make driving and service slower.

**My goal:** rebuild routes after a demand change so they stay short *and* as close as possible to the routes crews already know.

</Section>

<Section label="Approach" title="Three steps from disruption to a balanced plan">

<Approach />

<Objective />

</Section>

<Section label="Defining &ldquo;familiar&rdquo;" title="Three ways to measure how similar two routes are">

Route similarity depends on who you ask, so I defined and compared three measures. Each scores from 0 to 1 against the usual plan, and the solution is scored by its *least* consistent vehicle.

<Metrics />

</Section>

<Section label="Results" title="A small weight on consistency gives better routes overall">

<TradeoffChart />

<Findings />

</Section>

<Closing />
