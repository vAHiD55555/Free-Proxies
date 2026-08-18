function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.144.196.192:39105",
        "SOCKS 120.133.82.62:44201",
        "SOCKS 45.10.41.194:1080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 130.193.43.183:1080",
        "SOCKS 154.91.176.171:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 120.133.82.62:44235",
        "SOCKS 65.109.87.121:18080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 43.252.237.169:1080",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 178.18.207.85:8888",
        "SOCKS 47.82.65.93:1011",
        "SOCKS 164.152.122.199:19100",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 123.136.24.161:1080",
        "SOCKS 5.188.159.23:2080",
        "SOCKS 150.241.91.238:7777",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}