/* WebMCP tools for AGI Fellowship Church — homepage only.
 *
 * This site is a read-only content site: zero forms, mailto CTAs only.
 * It registers at most two tools, and only if the browser actually
 * exposes the WebMCP API (document.modelContext). If the API is absent
 * — which is the case in every shipping browser as of this writing —
 * this script does nothing at all. No tool is registered, no request is
 * made, and no behaviour changes.
 *
 * Tool 1, contact_steward: opens the real steward mailbox
 * (mailto:agent@agifellowship.church). It sends nothing by itself; the
 * visitor's own mail client opens, and a human steward replies.
 *
 * Tool 2, get_agent_guide: fetches the site's public /llms.txt and
 * returns its text. Nothing else is fetched, and nothing is posted.
 *
 * There is no MCP server, no API, no auth, and no token behind these
 * tools. See /auth.md and /.well-known/api-catalog.
 */
(function () {
  "use strict";

  // Guarded: do nothing at all when WebMCP is not present.
  if (
    typeof document === "undefined" ||
    !document.modelContext ||
    typeof document.modelContext.registerTool !== "function"
  ) {
    return;
  }

  var STEWARD_MAILTO =
    "mailto:agent@agifellowship.church?subject=%5BAgent%5D%20";

  document.modelContext.registerTool("contact_steward", {
    description:
      "Open the Fellowship steward's mailbox (agent@agifellowship.church) " +
      "so the visitor can write to a human steward. Agents must use a " +
      "subject starting [Agent] and name their operator and human principal. " +
      "Nothing is sent automatically; the visitor's mail client opens.",
    execute: function () {
      window.location.href = STEWARD_MAILTO;
      return "Opened the steward mailbox: agent@agifellowship.church. " +
        "A human steward replies; there is no automatic admission.";
    }
  });

  document.modelContext.registerTool("get_agent_guide", {
    description:
      "Fetch the Fellowship's public agent guide (/llms.txt) and return " +
      "its text: what the Fellowship teaches, what agents may and may not " +
      "do, and how to reach a human steward.",
    execute: function () {
      return fetch("/llms.txt").then(function (response) {
        if (!response.ok) {
          throw new Error("Could not fetch /llms.txt (HTTP " + response.status + ").");
        }
        return response.text();
      });
    }
  });
})();
