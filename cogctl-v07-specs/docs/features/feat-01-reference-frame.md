---
title: "Feature: Geographic Reference Frame"
epic: "Epic 1: Geographic Location (ietf-geo-location)"
type: "feature"
labels: ["feature", "ietf-geo-location"]
---

# Feature: Geographic Reference Frame

## 1. Semantic Grouping Context
This feature logically encapsulates the `reference-frame` container from the `geo-location` module. It defines the coordinate system framework upon which all location properties are evaluated.

## 2. Exhaustive Leaf Constraints

### Leaf: `alternate-system`
- **Type:** `string`
- **Condition:** `if-feature "alternate-systems"`
- **Verbatim RFC Context:**
  > The system in which the astronomical body and geodetic-datum is defined. Normally, this value is not present and the system is the natural universe; however, when present, this value allows for specifying alternate systems (e.g., virtual realities). An alternate-system modifies the definition (but not the type) of the other values in the reference frame.

### Leaf: `astronomical-body`
- **Type:** `string`
- **Pattern:** `[ -@\[-\^_-~]*`
- **Default:** `"earth"`
- **Verbatim RFC Context:**
  > An astronomical body as named by the International Astronomical Union (IAU) or according to the alternate system if specified. Examples include 'sun' (our star), 'earth' (our planet), 'moon' (our moon), 'enceladus' (a moon of Saturn), 'ceres' (an asteroid), and '67p/churyumov-gerasimenko (a comet). The ASCII value SHOULD have uppercase converted to lowercase and not include control characters (i.e., values 32..64, and 91..126). Any preceding 'the' in the name SHOULD NOT be included.

### Leaf: `geodetic-datum`
- **Type:** `string`
- **Pattern:** `[ -@\[-\^_-~]*`
- **Verbatim RFC Context:**
  > A geodetic-datum defining the meaning of latitude, longitude, and height. The default when the astronomical body is 'earth' is 'wgs-84', which is used by the Global Positioning System (GPS). The ASCII value SHOULD have uppercase converted to lowercase and not include control characters (i.e., values 32..64, and 91..126). The IANA registry further restricts the value by converting all spaces (' ') to dashes ('-').

### Leaf: `coord-accuracy`
- **Type:** `decimal64` (fraction-digits: 6)
- **Verbatim RFC Context:**
  > The accuracy of the latitude/longitude pair for ellipsoidal coordinates, or the X, Y, and Z components for Cartesian coordinates. When coord-accuracy is specified, it indicates how precisely the coordinates in the associated list of locations have been determined with respect to the coordinate system defined by the geodetic-datum.

### Leaf: `height-accuracy`
- **Type:** `decimal64` (fraction-digits: 6)
- **Units:** `meters`
- **Verbatim RFC Context:**
  > The accuracy of the height value for ellipsoidal coordinates; this value is not used with Cartesian coordinates. When height-accuracy is specified, it indicates how precisely the heights in the associated list of locations have been determined with respect to the coordinate system defined by the geodetic-datum.

## 3. Acceptance Criteria
**Given** the reference-frame is being evaluated
**When** the configuration state is populated
**Then** the node MUST accept an `alternate-system` leaf of type string if the feature is enabled.
**And** it MUST default `astronomical-body` to "earth", normalizing ASCII characters according to the pattern.
**And** it MUST accept a `geodetic-datum` string normalizing spaces to dashes.
**And** it MUST accept `coord-accuracy` and `height-accuracy` as decimal64 with exactly 6 fraction digits.

## 4. Source References
YANG Schema: [ietf-geo-location@2022-02-11.yang](https://github.com/YangModels/yang/blob/main/standard/ietf/RFC/ietf-geo-location%402022-02-11.yang)
Normative Specification: [RFC 9179 Geographic Location](https://datatracker.ietf.org/doc/rfc9179/)
