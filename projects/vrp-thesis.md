---
sidebar_position: 1
title: Route Re-optimization for Waste Collection
---

# Route Re-optimization for Waste Collection

**Tech:** Python, metaheuristics, operations research · **Where:** University of Vienna (Master's research thesis) · **When:** 04.2025 – 09.2025

## The question
*When waste volumes fluctuate, is the shortest route still the most efficient one?*

Waste collection runs on fixed periodic routes that drivers know well. When volumes change unexpectedly, the routes have to be rebuilt. The shortest new route can be very different from the usual one, which makes it harder to carry out in practice.

## What I did
- **Optimization model:** formulated a multi-objective function for the periodic Vehicle Routing Problem (PVRP) that rebuilds routes after a disruption, balancing distance minimization against similarity to the daily routes.
- **Methodology:** defined and compared three route similarity measures.
- **Implementation:** wrote a metaheuristic algorithm in Python to solve the model and find the most effective similarity measure.

## Results
Using the best similarity measure with weights of **0.75 (distance)** and **0.25 (similarity)**, the solution:

- cut total distance by **1.3%** compared with the distance-only solution, and
- increased similarity to the daily routes by **6.6%**.

So you don't have to choose between efficient routes and familiar ones: a weighted approach improves both.
