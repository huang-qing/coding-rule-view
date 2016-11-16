

(function ($) {
   
    'use strict';
    $.fn.extend({
        codingRuleView: function (opt) {
          
            var container = this,
                htmlTemplate,
                html = "",
                iconType,
                htmlCodeingRuleGroup = "",
                htmlCodingRuleIcon = "",
                htmlCodeingRuleGroupArray=[];

            iconType = {
                "01": "number",
                "02": "char",
                "03": "num-char",
                "04": "watercode",
                "05": "date",
                "00": "more"
            };

            htmlTemplate = {
                    codeingRule:'<div class="codingRule">[codingRule-group]</div>',
                    codeingRuleGroup:['<div class="codingRule-group codingRule-group-[codingRule-group-odd|even]">',
                                            '<div class="codeingRule-text-container codeingRule-text-container-top">',
                                                '<span class="codeingRule-line">',
                                                    '<span class="codeingRule-text" >',
                                                        '[codeingRule-text]',
                                                    '</span>',
                                                '</span>',
                                            '</div>',
                                            '<div class="codingRule-icons">',
                                                '[codingRule-icons]',
                                            '</div>',
                                            '<div class="codeingRule-text-container codeingRule-text-container-bottom">',
                                                '<span class="codeingRule-line">',
                                                    '<span class="codeingRule-text" >',
                                                        '[codeingRule-text]',
                                                    '</span>',
                                                '</span>',
                                            '</div>',
                                        '</div>'].join(""),
                    codingRuleIcon:'<span class="codingRule-icon codingRule-icon-[codingRule-icon-type]"></span>'
                };

            if (opt && opt instanceof Array) {
                var item,
                    name,
                    type,
                    codingLength;

                html = htmlTemplate.codeingRule;

                for (var i = 0, len = opt.length; i < len; i++) {
                    item = opt[i];
                    name = item.name;
                    type = iconType[item.type];
                    codingLength = item.length;

                    htmlCodeingRuleGroup = htmlTemplate.codeingRuleGroup.replace(/\[codeingRule-text\]/g, name).
                        replace(/\[codingRule-group-odd\|even\]/g, i % 2 === 0 ? "even" : "odd");

                    htmlCodingRuleIcon = "";

                    if (codingLength === 0) {
                        htmlCodingRuleIcon += htmlTemplate.codingRuleIcon.replace(/\[codingRule-icon-type\]/g, type);
                        htmlCodingRuleIcon += htmlTemplate.codingRuleIcon.replace(/\[codingRule-icon-type\]/g, iconType["00"]);
                    }
                    else {
                        for (var j = 0; j < codingLength; j++) {
                            htmlCodingRuleIcon += htmlTemplate.codingRuleIcon.replace(/\[codingRule-icon-type\]/g, type);
                        }
                    }

                    htmlCodeingRuleGroup = htmlCodeingRuleGroup.replace(/\[codingRule-icons\]/g, htmlCodingRuleIcon);
                    htmlCodeingRuleGroupArray.push(htmlCodeingRuleGroup);
                }

                html = html.replace(/\[codingRule-group\]/g, htmlCodeingRuleGroupArray.join(""));
            }

            return container.append(html);
        }
    });
})(jQuery);

