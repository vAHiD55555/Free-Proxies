function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 132.145.125.61:1080",
        "SOCKS 188.235.21.247:2080",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 223.254.141.102:6618",
        "SOCKS 188.166.120.48:1080",
        "SOCKS 185.93.104.246:1080",
        "SOCKS 103.138.145.102:1999",
        "SOCKS 8.215.112.214:7777",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 66.59.197.62:3128",
        "SOCKS 161.97.104.161:9050",
        "SOCKS 88.218.206.170:22",
        "SOCKS 212.3.127.242:10801",
        "SOCKS 103.88.234.239:40001",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 111.119.162.248:10933",
        "SOCKS 2.144.6.22:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}