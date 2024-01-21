![ATLAS](https://github.com/catalandres/plugin-atlas/assets/1649037/66844dc5-23f3-4a4e-bd12-b80f5421f710)

[![NPM](https://img.shields.io/npm/v/plugin-atlas.svg?label=plugin-atlas)](https://www.npmjs.com/package/plugin-atlas) [![Downloads/week](https://img.shields.io/npm/dw/plugin-atlas.svg)](https://npmjs.org/package/plugin-atlas) [![License](https://img.shields.io/badge/License-BSD%203--Clause-brightgreen.svg)](https://raw.githubusercontent.com/salesforcecli/plugin-documentation/main/LICENSE.txt)

<!-- tocstop -->

## Vision

Atlas is a one-stop shop documentation toolkit for your Salesforce project. It uses all the information stored in your Salesforce metadata files and outputs all that information in a structured, user-readable form, in multiple formats.

## How to install

1. [Install Node in your system.](https://nodejs.org/en) In case of doubt, go with the LTS installation.

1. Install the Salesforce CLI using `npm`:

   ```bash
   npm install --global @salesforce/cli
   ```

1. Install Atlas as a Salesforce CLI plugin:

   ```bash
   sf plugins install plugin-atlas
   ```

## How to update

1. Update the Salesforce CLI. It is the same command as installing it from scratch:

   ```bash
   npm install --global @salesforce/cli
   ```

1. Update all the Salesforce CLI plugins:

   ```bash
   sf plugins update
   ```

If the update fails, you can uninstall the plugin with `sf plugins uninstall plugin-atlas` and then reinstall it.

## Features

Currently supported output format:

- Excel spreadsheet (`xlsx`), with each metadata type (objects, fields, list views, etc) in separate tabs.

Currently supported metadata types:

- Objects
- Fields
- Record types
- Fieldsets
- Layouts
- List views
- Compact layouts
- Tabs
- Quick actions
- Validation rules
- Weblinks
- Flexipages (Lightning pages)
- Apex classes and triggers
- Visualforce pages and components
- Aura components
- Lightning web components
- Flows
- Workflow rules
- Profiles
- Roles
- Permission Sets
- Permission Set Groups
- User Access Policies

## Roadmap

### Features

- Additional output formats:
  - Multiple spreadsheets
  - Multiple CSV files
  - Markdown websites
  - HTML websites
- Enhance existing functionality:
  - Increase the number of metadata types included in the output
  - Make more information available for existing types
  - Quality of life improvements:
    - Choose the target file name and location
    - Select which metadata types should be included

### Maintenance and internal

- Increase test coverage
- Set up an automated release pipeline
- Continue to maintain

<br/><br/>

# Commands

<!-- commands -->

- [`sf atlas generate csv`](#sf-atlas-generate-csv)
- [`sf atlas generate xlsx`](#sf-atlas-generate-xlsx)

## `sf atlas generate csv`

Generate CSV files from the contents of your local project, with a separate file for each supported metadata type.

```
USAGE
  $ sf atlas generate csv [--json] [-d <value>]

FLAGS
  -d, --output-dir=<value>  [default: PROJECT_FOLDER/atlas/csv/YYYYMMDD-HHMMSS/] Folder where the CSV files will be
                            saved.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Generate CSV files from the contents of your local project, with a separate file for each supported metadata type.

  You must run this command from within a project.

EXAMPLES
  $ sf atlas generate csv

FLAG DESCRIPTIONS
  -d, --output-dir=<value>  Folder where the CSV files will be saved.

    More information about a flag. Don't repeat the summary.
```

## `sf atlas generate xlsx`

Generate an XLSX spreadsheet from the contents of your local project, with a sheet for each supported metadata type.

```
USAGE
  $ sf atlas generate xlsx [--json] [-f <value>]

FLAGS
  -f, --output-file=<value>  [default: PROJECT_FOLDER/atlas/xlsx/atlas-YYYYMMDD-HHMMSS.xlsx] Name and path of the XLSX
                             file to be generated.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Generate an XLSX spreadsheet from the contents of your local project, with a sheet for each supported metadata type.

  You must run this command from within a project.

EXAMPLES
  $ sf atlas generate xlsx

FLAG DESCRIPTIONS
  -f, --output-file=<value>  Name and path of the XLSX file to be generated.

    More information about a flag. Don't repeat the summary.
```

<!-- commandsstop -->
