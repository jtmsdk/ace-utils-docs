import AceAccordionDoc from './ace-accordion.component.docs';
import AceAlertDoc from './ace-alert.component.docs';
import AceAlertServiceDoc from './ace-alert.service.docs';
import AceArticleDoc from './ace-article.component.docs';
import AceAutofocusDocs from './ace-autofocus.directive.docs';
import AceBlockquoteDoc from './ace-blockquote.component.docs';
import AceButtonDoc from './ace-button.component.docs';
import AceCardDoc from './ace-card.component.docs';
import AceCodeblockDoc from './ace-codeblock.component.docs';
import AceColsDoc from './ace-cols.component.docs';
import AceDialogDoc from './ace-dialog.component.docs';
import AceErrorDoc from './ace-error.component.docs';
import AceFigureDoc from './ace-figure.component.docs';
import AceFocustrapDoc from './ace-focustrap.directive.docs';
import AceFooterDoc from './ace-footer.component.docs';
import AceFormDoc from './ace-form.component.docs';
import AceIconDoc from './ace-icon.component.docs';
import AceImageDoc from './ace-image.component.docs';
import AceInputDoc from './ace-input.component.docs';
import AceInputgroupDoc from './ace-inputgroup.component.docs';
import AceLightboxDoc from './ace-lightbox.component.docs';
import AceLightboxDirDoc from './ace-lightbox.directive.docs';
import AceLinkDoc from './ace-link.component.docs';
import AceMenuDoc from './ace-menu.component.docs';
import AceModalDoc from './ace-modal.component.docs';
import AceModalServiceDoc from './ace-modal.service.docs';
import AceMsgDoc from './ace-msg.component.docs';
import AceNoteDoc from './ace-note.component.docs';
import AceParallaxDoc from './ace-parallax.component.docs';
import AcePopoverDoc from './ace-popover.component.docs';
import AceProgressbarDoc from './ace-progressbar.component.docs';
import AceSearchDoc from './ace-search.component.docs';
import AceSelectDoc from './ace-select.component.docs';
import AceSpinnerDoc from './ace-spinner.component.docs';
import aceSpinnerServiceDocs from './ace-spinner.service.docs';
import AceSwitchDoc from './ace-switch.component.docs';
import AceTableDoc from './ace-table.component.docs';
import AceTabsDoc from './ace-tabs.component.docs';
import AceTextareaDoc from './ace-textarea.component.docs';
import AceThumbsDoc from './ace-thumbs.component.docs';
import ColorsDoc from './doc-colors.docs';
import GettingStartedDocs from './doc-gettingstarted.docs';
import IconsDoc from './doc-icons.docs';
import IntroductionDoc from './doc-introduction.docs';

export const sections = [
    {
        id: 'documentation',
        title: 'Documentation',
        items: [
            IntroductionDoc,
            GettingStartedDocs
        ]
    },
    {
        id: 'variables',
        title: 'Tokens',
        items: [
            ColorsDoc
        ]
    },
    {
        id: 'icons',
        title: 'Icons',
        items: [
            IconsDoc
        ]
    },
    {
        id: 'components',
        title: 'Components',
        items: [
            AceAccordionDoc,
            AceAlertDoc,
            AceArticleDoc,
            AceBlockquoteDoc,
            AceButtonDoc,
            AceCardDoc,
            AceCodeblockDoc,
            AceColsDoc,
            AceDialogDoc,
            AceErrorDoc,
            AceFigureDoc,
            AceFooterDoc,
            AceFormDoc,
            AceIconDoc,
            AceImageDoc,
            AceInputDoc,
            AceInputgroupDoc,
            AceLightboxDoc,
            AceLinkDoc,
            AceMenuDoc,
            AceModalDoc,
            AceMsgDoc,
            AceNoteDoc,
            AceParallaxDoc,
            AcePopoverDoc,
            AceProgressbarDoc,
            AceSearchDoc,
            AceSelectDoc,
            AceSpinnerDoc,
            AceSwitchDoc,
            AceTableDoc,
            AceTabsDoc,
            AceTextareaDoc,
            AceThumbsDoc
        ]
    },
    {
        id: 'directives',
        title: 'Directives',
        items: [
            AceAutofocusDocs,
            AceFocustrapDoc,
            AceLightboxDirDoc
        ]
    },
    {
        id: 'services',
        title: 'Services',
        items: [
            AceAlertServiceDoc,
            AceModalServiceDoc,
            aceSpinnerServiceDocs
        ]
    }
];