function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.216.197.62:8091",
        "SOCKS 43.135.176.121:1080",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 45.74.31.42:5760",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 18.230.23.72:40381",
        "SOCKS 193.124.15.177:60001",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 103.181.163.77:1090",
        "SOCKS 18.144.86.139:23337",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 188.168.51.56:1080",
        "SOCKS 195.211.124.50:1080",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 45.74.31.42:4114",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 223.254.141.102:6604",
        "SOCKS 47.242.207.71:9898",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}