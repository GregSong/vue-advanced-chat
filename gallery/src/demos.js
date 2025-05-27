import FormatMessageDemo from '../../demos/01-format-message/FormatMessageDemo.vue'
import formatDoc from '../../demos/01-format-message/README.md?raw'
import EmojiPickerDemo from '../../demos/02-emoji-picker/EmojiPickerDemo.vue'
import emojiDoc from '../../demos/02-emoji-picker/README.md?raw'
import AttachmentsDemo from '../../demos/03-attachments/AttachmentsDemo.vue'
import attachmentsDoc from '../../demos/03-attachments/README.md?raw'
import EditReplyDemo from '../../demos/04-edit-reply/EditReplyDemo.vue'
import editDoc from '../../demos/04-edit-reply/README.md?raw'
import UserTagsDemo from '../../demos/05-user-tags/UserTagsDemo.vue'
import tagDoc from '../../demos/05-user-tags/README.md?raw'
import StatusIndicatorDemo from '../../demos/06-status-indicator/StatusIndicatorDemo.vue'
import statusDoc from '../../demos/06-status-indicator/README.md?raw'
import ThemeModeDemo from '../../demos/07-theme-mode/ThemeModeDemo.vue'
import themeDoc from '../../demos/07-theme-mode/README.md?raw'

export default [
  { name: '文本格式展示', component: FormatMessageDemo, doc: formatDoc },
  { name: '表情选择器', component: EmojiPickerDemo, doc: emojiDoc },
  { name: '附件消息', component: AttachmentsDemo, doc: attachmentsDoc },
  { name: '编辑与回复', component: EditReplyDemo, doc: editDoc },
  { name: '用户标签', component: UserTagsDemo, doc: tagDoc },
  { name: '消息状态', component: StatusIndicatorDemo, doc: statusDoc },
  { name: '主题切换', component: ThemeModeDemo, doc: themeDoc }
]
