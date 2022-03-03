<?php
namespace ExAdmin\ui\response;
/**
 * Message 响应提示
 * @method $this success(string $message) 成功
 * @method $this error(string $message) 失败
 * @method $this info(string $message) 信息
 * @method $this warning(string $message) 警告
 * @method $this loading(string $message) 加载中
 */
class Message implements \JsonSerializable
{
    protected $response = [
        'code' => 80020,
    ];
    protected $data = [
        'type' => 'success',
        'duration' => 3,
        'content' => '',
        'url' => ''
    ];
    protected $config = [];

    public function __construct($config = [])
    {
        $this->data = $config;

    }

    public function __call($name, $arguments)
    {
        $this->data['type'] = $name;
        $this->data['content'] = $arguments[0];
        return $this;
    }

    /**
     * 跳转url
     * @param string $url
     * @return $this
     */
    public function redirect($url)
    {
        $this->data['url'] = $url;
        return $this;
    }
    /**
     * 刷新当前页面
     */
    public function refresh()
    {
        $this->data['refresh'] = true;
        return $this;
    }
    public function jsonSerialize()
    {
        $this->response['data'] = $this->data;
        return $this->response;
    }
}