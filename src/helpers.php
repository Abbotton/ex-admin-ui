<?php
const EX_ADMIN_VERSION = '1.0.0';

use ExAdmin\ui\component\common\Html;
use ExAdmin\ui\support\Container;

if (extension_loaded('zlib')) {
    if (isset($_SERVER['HTTP_ACCEPT_ENCODING']) and strpos($_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip') !== FALSE) {
        ob_start('ob_gzhandler');
    }
}

\ExAdmin\ui\support\Container::getInstance()->make(\ExAdmin\ui\support\Config::class,[__DIR__.'/config/']);

if (!function_exists('admin_config')) {
    /**
     * 获取和设置配置参数
     * @param string|array $name  参数名
     * @param mixed        $value 参数值
     * @return mixed
     */
    function admin_config($name = '', $value = null)
    {
        $config = \ExAdmin\ui\support\Container::getInstance()->config;
        if (is_array($name)) {
            return $config->set($name, $value);
        }
        if($name == '*'){
            $sysmteConfig = $config->get('ui');
            $sysmteConfig['locale'] = admin_trans('antd');
            return $sysmteConfig;
        }
        return 0 === strpos($name, '?') ? $config->has(substr($name, 1)) : $config->get($name, $value);
    }
}
if (!function_exists('admin_trans')) {
    /**
     * 翻译
     * @param string $name 语言变量名
     * @param mixed $default 默认值
     * @param array $parameters 替换参数
     * @param null $locale 语言
     * @return string
     */
    function admin_trans($name,$default = null, array $parameters = [], $locale = null)
    {
        return \ExAdmin\ui\support\Container::getInstance()->translator->tran($name,$default,$parameters,$locale);

    }
}

if (!function_exists('message_success')) {
    /**
     * 响应成功提示
     * @param string $message 提示文本
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function message_success($message,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Message::class,$config)
            ->success($message);
    }
}
if (!function_exists('message_error')) {
    /**
     * 响应失败提示
     * @param string $message 提示文本
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function message_error($message,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Message::class,$config)
            ->error($message);
    }
}
if (!function_exists('message_info')) {
    /**
     * 响应信息提示
     * @param string $message 提示文本
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function message_info($message,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Message::class,$config)
            ->info($message);
    }
}
if (!function_exists('message_warning')) {
    /**
     * 响应警告提示
     * @param string $message 提示文本
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function message_warning($message,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Message::class,$config)
            ->warning($message);
    }
}
if (!function_exists('message_loading')) {
    /**
     * 响应加载提示
     * @param string $message 提示文本
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function message_loading($message,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Message::class,$config)
            ->warning($message);
    }
}



if (!function_exists('notification_success')) {
    /**
     * 响应成功提示
     * @param string $message 标题
     * @param string $description 内容
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function notification_success($message,$description,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Notification::class,$config)
            ->success($message,$description);
    }
}
if (!function_exists('notification_error')) {
    /**
     * 响应失败提示
     * @param string $message 标题
     * @param string $description 内容
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function notification_error($message,$description,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Notification::class,$config)
            ->error($message,$description);
    }
}
if (!function_exists('notification_info')) {
    /**
     * 响应信息提示
     * @param string $message 标题
     * @param string $description 内容
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function notification_info($message,$description,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Notification::class,$config)
            ->info($message,$description);
    }
}
if (!function_exists('notification_warning')) {
    /**
     * 响应警告提示
     * @param string $message 标题
     * @param string $description 内容
     * @param array $config 配置
     * @return \ExAdmin\ui\response\Message
     */
    function notification_warning($message,$description,$config=[])
    {
        return \ExAdmin\ui\support\Container::getInstance()
            ->make(\ExAdmin\ui\response\Notification::class,$config)
            ->warning($message,$description);
    }
}
if (!function_exists('admin_view')) {
    /**
     * 渲染组件
     * @param string $content 内容
     * @return Html
     */
    function admin_view($content)
    {
        return Html::create($content)->tag('component');
    }
}
if (!function_exists('plugin')) {
    /**
     * 插件管理
     * @return \ExAdmin\ui\plugin\Manager
     */
    function plugin()
    {
        return \ExAdmin\ui\support\Container::getInstance()->plugin;
    }
}
if (!function_exists('ex_admin_version')) {
    /**
     * 获取版本号
     * @return string
     */
    function ex_admin_version()
    {
        return EX_ADMIN_VERSION;
    }
}


