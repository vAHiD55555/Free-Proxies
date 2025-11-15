function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 137.184.228.194:40886",
        "SOCKS 186.67.47.230:999",
        "SOCKS 47.242.44.225:1011",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 93.126.6.66:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 177.10.202.115:35452",
        "SOCKS 117.74.65.207:80",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 155.94.163.202:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 103.132.52.32:8080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 80.253.246.238:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}