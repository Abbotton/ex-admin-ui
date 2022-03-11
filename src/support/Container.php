<?php
/**
 * Created by PhpStorm.
 * User: rocky
 * Date: 2022-02-21
 * Time: 22:32
 */

namespace ExAdmin\ui\support;

use ExAdmin\ui\auth\Node;
use Illuminate\Support\Facades\Log;

/**
 * @property Config $config
 * @property Translator $translator
 * @property Node $node
 */
class Container
{
    protected static $instance = null;
    protected $bind = [
        'config'=>Config::class,
        'translator'=>Translator::class,
        'node'=>Node::class,
    ];
    protected $instances = [];

    public function init()
    {
        $this->make(Config::class,[__DIR__.'/../config/']);
        $this->make(Translator::class,[$this->config->get('admin.lang')]);
        $this->make(Node::class);

    }

    /**
     * 获取当前容器的实例（单例）
     * @access public
     * @return static
     */
    public static function getInstance()
    {
        if (is_null(static::$instance)) {
            static::$instance = new self();
            static::$instance->init();
        }
        return static::$instance;
    }

    public function __get($name)
    {

        if(isset($this->bind[$name])){
            return $this->instances[$this->bind[$name]];
        }
    }

    public function make($name, array $arguments = [], bool $newInstance = false)
    {
        if ($newInstance || !isset($this->instances[$name])) {
            $this->instances[$name] = new $name(...$arguments);
        }
        return $this->instances[$name];
    }
}
