function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 141.11.42.163:1080",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 213.35.110.67:10809",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 159.8.114.37:80",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 166.249.154.135:3128",
        "SOCKS 8.215.85.201:7777",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 119.81.189.194:80",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 185.189.112.157:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}