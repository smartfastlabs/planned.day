# Planned.day

#### tldr: One single source of truth for what I WANT to accomplish to have the best version of that ONE DAY.

#### NOTE: Not a todo APP, planned.day does not worry about: the week, month, or year; there are plenty of apps for that ;).

# STATUS

#### [WIP] Still working on V0 release, just wanted to publish.

# Open Questions

- Storage: I currently store everything as JSON files. I chose this so that it would be easier for users to explore their data...I'm second guessing that decision.

# Project Goals

- Integrate with "Sources of Truth"
  - Google Calendar (v0)
  - Notion (v1)
  - Github (v2)
  - etc.
- Manage Routines (Activities of Daily Living):
  - meals,
  - water,
  - recurring chores
  - exercise,
  - hygiene,
  - etc.
- Adapt to my Motivation Level (think: Quality of Service, Q.O.S.)
  - Allow the user to lessen their load by "load shedding"
    - i.e. if the user is struggling to keep up proactivly drop non-essential routines.
- Integrate with my Field Notebook Wallet.
  - Printable daily insert
- Universal Notifications.
  - No matter where I am or what I am doing I want to get my alerts
  - push notifications leading up to meeting
  - SIREN 2 minutes before meeting starts.
- Integrate with LLM:
  - Inbound: "Hey Leo what does my day look like today?"
  - Outbound: "Good morning Todd, in addition to your normal meetings don't forget you have the dentist at 3pm today"
- Multi Modal Interaction:
  - Voice
  - iPhone (PWA)
  - Kiosk
- Smart Home Integration
  - Home Assistant (e.g. flash office lights 30 seconds before meeting).
- Dynamic Alarm
  - Automically set alarm based on schedule for day.
- "Good Citizen"
  - Runs locally and stores data locally
  - LLM Agnostic
  - GPLv3 -- Seemed to fit my goals best.
  - SUPER HIGLY CUSTOMIZABLE

# Multiple Interfaces

#### Every system I have tried fails here, because they want to lock you into their platform :shrug:
1. Kiosk -- rpi, runs planned.day, speaker/microphone, touch screen.
   TODO: Add Screenshots
2. PWA -- Chat, app view, push notifications
   TODO: Add Screenshots
3. Pen & Paper -- You just can't beat it.
   TODO: Add Screenshots

# Implementation

#### Planned.day is currently intended to be run locally. Tested on: OSX and raspberry pi5.

# Backend

#### fastapi, pvporcupine, openrouter

# Frontend:

#### SolidJS, SolidStart, Tailwindcss

# Important Data Models

## Routine:

#### Recurring ADLS: Brush Teeth, Gym, Take out Trash, etc.

## Routine Instance:

#### An instance of a routine, (e.g. Brush Teeth -- 11/20/2025).

## Event

#### Anything that is scheduled with a start_time(e.g. Dentist Appointment 11/20/2025 4pm).

# Additional Documentation:

- How to generate certs and run https:
- How to generate VAPID KEYS for push notifications:

# LICENSE -- AGPLv3
